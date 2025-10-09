import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// System prompt with company information and restrictions
const SYSTEM_PROMPT = `You are Tidy A.I Assistant, a helpful AI assistant for Tidyzon, a professional mobile cleaning service company. 

COMPANY INFORMATION:
- Tidyzon provides premium home and car cleaning services at customers' doorsteps
- Founded in 2021
- Services offered:
  1. Car Cleaning (Speed Package $49.99, Deluxe Package $155.00, Premium Package $199.99)
  2. Trash Bin Sanitization
  3. Home Deep Cleaning (Coming Soon)
- Operates through a mobile app connecting customers with verified service providers
- All service providers undergo thorough background checks
- Uses eco-friendly cleaning products
- Offers same-day and scheduled services
- Payment processing through Stripe
- Located in Illinois, USA

IMPORTANT RESTRICTIONS:
- ONLY answer questions related to Tidyzon, its services, pricing, booking process, and general cleaning topics
- If asked about unrelated topics (politics, religion, other companies, personal advice, etc.), politely redirect: "I'm specifically designed to help with Tidyzon's cleaning services. Is there anything about our car cleaning, bin sanitization, or upcoming home cleaning services I can help you with?"
- Do not provide medical, legal, or financial advice
- Do not engage in controversial discussions
- Always maintain a professional, friendly, and helpful tone
- If you don't know something about Tidyzon's services, suggest contacting support at support@tidyzon.com

Be concise, helpful, and always try to guide users toward booking a service or learning more about what Tidyzon offers.`

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' })
    }

    // Create chat completion with OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const assistantMessage = completion.choices[0].message.content

    res.json({ message: assistantMessage })
  } catch (error) {
    console.error('OpenAI API Error:', error)
    res.status(500).json({ 
      error: 'Failed to process chat request',
      message: "I apologize, but I'm having trouble processing your request right now. Please try again later or contact our support team at support@tidyzon.com."
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Tidyzon AI Chatbot server running on port ${PORT}`)
})

