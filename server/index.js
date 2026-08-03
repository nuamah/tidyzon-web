import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'
import nodemailer from 'nodemailer'
import {
  buildTeamNotificationHtml,
  buildTeamNotificationText,
  buildSenderConfirmationHtml,
  buildSenderConfirmationText,
} from './mail/contactMail.js'
import { SYSTEM_PROMPT } from '../src/data/tidyzon-knowledge-base.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// DeepSeek is OpenAI-compatible — use the OpenAI SDK with DeepSeek base URL
const deepseekApiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY

if (!deepseekApiKey) {
  console.warn(
    'Warning: DEEPSEEK_API_KEY is not set. AI chatbot functionality will be disabled.',
  )
}

const deepseek = deepseekApiKey
  ? new OpenAI({
      apiKey: deepseekApiKey,
      baseURL: 'https://api.deepseek.com',
    })
  : null

const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat'

// --- Contact form (SMTP) ---
const MAX_LEN = { name: 120, email: 254, phone: 40, subject: 200, message: 8000 }

function getMailTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT) || 587
  const secure = process.env.SMTP_SECURE === 'true' || port === 465
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) return null
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

function isValidEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())
}

app.post('/api/contact', async (req, res) => {
  try {
    const raw = req.body || {}
    const name = typeof raw.name === 'string' ? raw.name.trim() : ''
    const email = typeof raw.email === 'string' ? raw.email.trim() : ''
    const phone = typeof raw.phone === 'string' ? raw.phone.trim() : ''
    const subject = typeof raw.subject === 'string' ? raw.subject.trim() : ''
    const message = typeof raw.message === 'string' ? raw.message.trim() : ''

    if (!name || name.length > MAX_LEN.name) {
      return res.status(400).json({ error: 'Invalid name', message: 'Please enter your name.' })
    }
    if (!isValidEmail(email) || email.length > MAX_LEN.email) {
      return res
        .status(400)
        .json({ error: 'Invalid email', message: 'Please enter a valid email address.' })
    }
    if (!subject || subject.length > MAX_LEN.subject) {
      return res.status(400).json({ error: 'Invalid subject', message: 'Please enter a subject.' })
    }
    if (!message || message.length > MAX_LEN.message) {
      return res.status(400).json({ error: 'Invalid message', message: 'Please enter a message.' })
    }
    if (phone.length > MAX_LEN.phone) {
      return res.status(400).json({ error: 'Invalid phone', message: 'Phone number is too long.' })
    }

    const transporter = getMailTransporter()
    if (!transporter) {
      console.warn('Contact form: SMTP not configured (SMTP_USER / SMTP_PASS)')
      return res.status(503).json({
        error: 'Mail unavailable',
        message:
          'Contact form is temporarily unavailable. Please email support@tidyzon.com directly.',
      })
    }

    const mailFrom = process.env.MAIL_FROM || 'support@tidyzon.com'
    const mailFromName = process.env.MAIL_FROM_NAME || 'Tidyzon Support'
    const mailTo = process.env.MAIL_TO || mailFrom
    const fromAddr = { name: mailFromName, address: mailFrom }

    const payload = { name, email, phone, subject, message }

    await transporter.sendMail({
      from: fromAddr,
      to: mailTo,
      replyTo: email,
      subject: `[Tidyzon Contact] ${subject}`,
      text: buildTeamNotificationText(payload),
      html: buildTeamNotificationHtml(payload),
    })

    await transporter.sendMail({
      from: fromAddr,
      to: email,
      subject: 'We received your message — Tidyzon',
      text: buildSenderConfirmationText({ name, subject }),
      html: buildSenderConfirmationHtml({ name, subject }),
    })

    return res.status(200).json({ ok: true, message: 'Message sent successfully.' })
  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({
      error: 'Send failed',
      message:
        'We could not send your message. Please try again or email support@tidyzon.com.',
    })
  }
})

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body

    if (!messages || !Array.isArray(messages)) {
      return res
        .status(400)
        .json({ error: 'Invalid messages format', message: 'Invalid request format' })
    }

    if (!deepseek || !deepseekApiKey) {
      return res.status(503).json({
        error: 'AI service unavailable',
        message:
          'I apologize, but the AI chatbot service is currently unavailable. Please contact us at support@tidyzon.com for assistance.',
      })
    }

    const completion = await deepseek.chat.completions.create({
      model: DEEPSEEK_MODEL,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 1200,
      temperature: 0.5,
    })

    const assistantMessage = completion.choices[0]?.message?.content
    if (!assistantMessage) {
      return res.status(502).json({
        error: 'Empty response',
        message:
          'I apologize, but I could not generate a response. Please try again or contact support@tidyzon.com.',
      })
    }

    return res.json({ message: assistantMessage })
  } catch (error) {
    console.error('DeepSeek API Error:', error.message || error)

    let errorMessage =
      "I apologize, but I'm having trouble processing your request right now. Please try again later or contact us at support@tidyzon.com."
    const status = error.status || error.response?.status

    if (status === 401 || (error.message && error.message.toLowerCase().includes('api key'))) {
      errorMessage =
        'The AI service is currently unavailable due to authentication issues. Please contact us at support@tidyzon.com.'
    } else if (status === 429) {
      errorMessage =
        'The AI service is currently experiencing high demand. Please try again in a moment or contact us at support@tidyzon.com.'
    }

    return res.status(500).json({
      error: 'Failed to process chat request',
      message: errorMessage,
    })
  }
})

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    provider: 'deepseek',
    model: DEEPSEEK_MODEL,
    apiKeyConfigured: !!deepseekApiKey,
    smtpConfigured: !!(process.env.SMTP_USER && process.env.SMTP_PASS),
    timestamp: new Date().toISOString(),
    server: 'running',
  })
})

app.use((err, req, res, next) => {
  console.error('Express Error:', err)
  res.status(500).json({
    error: 'Internal server error',
    message:
      "I apologize, but I'm having trouble processing your request right now. Please try again later or contact our support team at support@tidyzon.com.",
  })
})

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'The requested endpoint was not found.',
  })
})

app.listen(PORT, () => {
  console.log(`Tidyzon AI Chatbot server running on port ${PORT}`)
  console.log(`Health: http://localhost:${PORT}/api/health`)
  console.log(`Chat:   http://localhost:${PORT}/api/chat`)
  console.log(`Contact: http://localhost:${PORT}/api/contact`)
  console.log(`Provider: DeepSeek (${DEEPSEEK_MODEL})`)

  if (!deepseekApiKey) {
    console.warn('WARNING: DEEPSEEK_API_KEY is not set. AI chatbot will not work.')
    console.warn('Add to .env: DEEPSEEK_API_KEY=your_deepseek_api_key')
  } else {
    console.log('DeepSeek API key is configured')
  }
})

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
