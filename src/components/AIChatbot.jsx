import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { X, Send, Loader, ExternalLink, Trash2 } from 'lucide-react'
import OpenAI from 'openai'
import { SYSTEM_PROMPT, findAnswer } from '../data/tidyzon-knowledge-base'
import './AIChatbot.css'

const BOT_IMAGE = '/assets/botImage.png'

// Temporary: DeepSeek key in the client until a secure API endpoint is ready.
const DEEPSEEK_API_KEY = 'sk-89be30c6be764e8ba99dfc1215368cc5'
const DEEPSEEK_MODEL = 'deepseek-chat'
const STORAGE_KEY = 'tidyzon_ai_chat_messages'

const WELCOME_AI =
  "Hello! I'm Tidy A.I. Assistant. I can help with Tidyzon's services, pricing, booking, apps, team, becoming a provider, and contact details. How can I assist you today?"

const WELCOME_LOCAL =
  "Hello! I'm Tidy A.I. Assistant. I can help with Tidyzon's services, pricing, booking, and contact details using our knowledge base. For immediate help: support@tidyzon.com or (815) 608-1632."

const OFF_TOPIC_HINT =
  "I'm specifically designed to help with Tidyzon. Ask me about our car cleaning packages, trash bin sanitization, booking, apps, team, or becoming a provider."

const defaultWelcome = () => [{ role: 'assistant', content: WELCOME_AI }]

function loadStoredMessages() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultWelcome()
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultWelcome()
    const valid = parsed.every(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string',
    )
    return valid ? parsed : defaultWelcome()
  } catch {
    return defaultWelcome()
  }
}

function linkLabelFromUrl(url) {
  const lower = url.toLowerCase()
  if (lower.startsWith('mailto:')) return `Email ${url.replace(/^mailto:/i, '')}`
  if (lower.startsWith('tel:')) {
    const num = url.replace(/^tel:/i, '')
    return `Call ${num}`
  }
  if (lower.includes('tidyzon.com/services')) return 'View Services'
  if (lower.includes('tidyzon.com/get-started')) return 'Get Started'
  if (lower.includes('tidyzon.com/contact') || lower.includes('tidyzon.com/help'))
    return 'Contact Us'
  if (lower.includes('tidyzon.com/provider')) return 'Become a Provider'
  if (lower.includes('tidyzon.com/about')) return 'About Tidyzon'
  if (lower.includes('tidyzon.com/teams')) return 'Meet the Team'
  if (lower.includes('apps.apple.com') || lower.includes('play.google.com')) {
    if (lower.includes('provider')) return 'Download Provider App'
    return 'Download User App'
  }
  if (lower.includes('tidyzon.com')) return 'Visit Tidyzon'
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return 'Open link'
  }
}

function normalizeHref(href) {
  const trimmed = href.trim()
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed
  if (trimmed.startsWith('/')) return trimmed
  if (trimmed.includes('@') && !trimmed.includes(' ')) return `mailto:${trimmed}`
  if (/^\+?[\d\s().-]{7,}$/.test(trimmed)) {
    return `tel:${trimmed.replace(/[^\d+]/g, '')}`
  }
  return trimmed
}

/** Split text into plain parts + link tokens for button rendering */
function tokenizeInline(text) {
  const tokens = []
  const pattern =
    /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s<>)"']+)|(mailto:[^\s<>)"']+)|(tel:[^\s<>)"']+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g

  let lastIndex = 0
  let match
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: text.slice(lastIndex, match.index) })
    }

    if (match[1] && match[2]) {
      tokens.push({
        type: 'link',
        label: match[1].trim(),
        href: normalizeHref(match[2]),
      })
    } else if (match[3] || match[4] || match[5]) {
      const href = match[3] || match[4] || match[5]
      tokens.push({
        type: 'link',
        label: linkLabelFromUrl(href),
        href: normalizeHref(href),
      })
    } else if (match[6]) {
      tokens.push({
        type: 'link',
        label: `Email ${match[6]}`,
        href: `mailto:${match[6]}`,
      })
    } else if (match[7]) {
      const raw = match[7]
      tokens.push({
        type: 'link',
        label: `Call ${raw}`,
        href: `tel:${raw.replace(/[^\d+]/g, '')}`,
      })
    }

    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', value: text.slice(lastIndex) })
  }

  return tokens.length ? tokens : [{ type: 'text', value: text }]
}

function renderInlineText(text, keyPrefix) {
  // Bold / italic on text segments only (links stay as buttons)
  const withMarks = (segment, key) => {
    const parts = []
    const re = /(\*\*|__)(.+?)\1|(\*|_)(.+?)\3/g
    let i = 0
    let m
    while ((m = re.exec(segment)) !== null) {
      if (m.index > i) parts.push(segment.slice(i, m.index))
      if (m[1]) {
        parts.push(
          <strong key={`${key}-b-${m.index}`}>{m[2]}</strong>,
        )
      } else {
        parts.push(<em key={`${key}-i-${m.index}`}>{m[4]}</em>)
      }
      i = m.index + m[0].length
    }
    if (i < segment.length) parts.push(segment.slice(i))
    return parts.length ? parts : segment
  }

  return tokenizeInline(text).map((token, idx) => {
    const key = `${keyPrefix}-${idx}`
    if (token.type === 'link') {
      const isHttp = /^https?:/i.test(token.href)
      return (
        <a
          key={key}
          href={token.href}
          className="chat-link-btn"
          {...(isHttp
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <span>{token.label}</span>
          <ExternalLink className="chat-link-btn-icon" aria-hidden="true" />
        </a>
      )
    }
    return (
      <React.Fragment key={key}>
        {withMarks(token.value, key)}
      </React.Fragment>
    )
  })
}

function formatMessage(content) {
  const blocks = content
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)

  return blocks.map((block, index) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean)
    const isList =
      lines.length > 0 &&
      lines.every((line) => /^([•\-*]|\d+[.)])\s+/.test(line))

    const isHeading =
      lines.length === 1 &&
      (lines[0].endsWith(':') ||
        (/^\*\*.+\*\*:?$/.test(lines[0]) && lines[0].length < 80) ||
        (lines[0].length < 55 && !lines[0].includes('.') && /^[A-Z0-9]/.test(lines[0])))

    if (isHeading) {
      const heading = lines[0].replace(/^[:\s]+|[:\s]+$/g, '').replace(/\*\*/g, '')
      return (
        <h4 key={`h-${index}`} className="message-title">
          {heading.replace(/:$/, '')}
        </h4>
      )
    }

    if (isList) {
      return (
        <ul key={`l-${index}`} className="message-list">
          {lines.map((line, itemIndex) => {
            const clean = line.replace(/^([•\-*]|\d+[.)])\s+/, '')
            return (
              <li key={`li-${index}-${itemIndex}`} className="message-list-item">
                {renderInlineText(clean, `li-${index}-${itemIndex}`)}
              </li>
            )
          })}
        </ul>
      )
    }

    // Mixed block: keep line breaks professionally
    if (lines.length > 1) {
      return (
        <div key={`b-${index}`} className="message-block">
          {lines.map((line, lineIndex) => {
            if (/^([•\-*]|\d+[.)])\s+/.test(line)) {
              return (
                <div key={`bl-${lineIndex}`} className="message-list-item message-list-item--inline">
                  {renderInlineText(
                    line.replace(/^([•\-*]|\d+[.)])\s+/, ''),
                    `bl-${index}-${lineIndex}`,
                  )}
                </div>
              )
            }
            return (
              <p key={`bp-${lineIndex}`} className="message-paragraph message-paragraph--tight">
                {renderInlineText(line, `bp-${index}-${lineIndex}`)}
              </p>
            )
          })}
        </div>
      )
    }

    return (
      <p key={`p-${index}`} className="message-paragraph">
        {renderInlineText(block, `p-${index}`)}
      </p>
    )
  })
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(loadStoredMessages)
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [quotaExceeded, setQuotaExceeded] = useState(false)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)
  const chatWindowRef = useRef(null)

  const apiKeyReady =
    DEEPSEEK_API_KEY.startsWith('sk-') &&
    !DEEPSEEK_API_KEY.includes('REPLACE_WITH')

  const apiAvailable = apiKeyReady && !quotaExceeded

  const deepseek = useMemo(() => {
    if (!apiKeyReady) return null
    return new OpenAI({
      apiKey: DEEPSEEK_API_KEY,
      baseURL: 'https://api.deepseek.com',
      dangerouslyAllowBrowser: true,
      maxRetries: 0,
    })
  }, [apiKeyReady])

  // Persist conversation so closing / refreshing keeps history
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // ignore quota / private mode
    }
  }, [messages])

  useEffect(() => {
    if (!isOpen) return
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen, isLoading])

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && window.innerWidth <= 1023) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const closeChat = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openChat = useCallback(() => {
    setIsOpen(true)
  }, [])

  // Escape closes chat
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeChat()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeChat])

  const clearConversation = () => {
    const welcome = [
      {
        role: 'assistant',
        content: apiAvailable ? WELCOME_AI : WELCOME_LOCAL,
      },
    ]
    setMessages(welcome)
  }

  const localFallback = (userMessage) => {
    const lower = userMessage.toLowerCase().trim()
    const greetings = [
      'hi',
      'hello',
      'hey',
      'greetings',
      'good morning',
      'good afternoon',
      'good evening',
    ]
    const isGreeting = greetings.some(
      (g) => lower === g || lower.startsWith(g + ' '),
    )
    if (isGreeting) {
      return `Hello! I'm Tidy A.I. Assistant for **Tidyzon**.\n\nI can help with:\n• Car cleaning packages and pricing\n• Trash bin sanitization\n• Booking and mobile apps\n• Becoming a provider\n• Team and company info\n• Contact details\n\n${OFF_TOPIC_HINT}\n\n[Email Support](mailto:support@tidyzon.com)\n[Call Tidyzon](tel:+18156081632)`
    }
    const result = findAnswer(userMessage)
    return (
      result?.answer ||
      `${OFF_TOPIC_HINT}\n\n[Email Support](mailto:support@tidyzon.com)\n[Call Tidyzon](tel:+18156081632)\n[Contact Us](https://tidyzon.com/contact)`
    )
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'

    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    // Keep last turns for context (welcome + recent history)
    const conversation = newMessages
      .filter((m) => m.role === 'user' || m.role === 'assistant')
      .slice(-24)
      .map(({ role, content }) => ({ role, content }))

    try {
      let assistantMessage = null

      if (deepseek && !quotaExceeded) {
        try {
          const completion = await deepseek.chat.completions.create({
            model: DEEPSEEK_MODEL,
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...conversation,
            ],
            max_tokens: 1200,
            temperature: 0.5,
          })
          assistantMessage = completion.choices[0]?.message?.content || null
        } catch (error) {
          const msg = (error.message || '').toLowerCase()
          const status = error.status || error.response?.status
          if (
            status === 429 ||
            msg.includes('429') ||
            msg.includes('rate') ||
            msg.includes('quota')
          ) {
            setQuotaExceeded(true)
          }
        }
      }

      if (!assistantMessage) {
        assistantMessage = localFallback(userMessage)
      }

      setMessages([
        ...newMessages,
        { role: 'assistant', content: assistantMessage },
      ])
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            'I apologize, but I am having trouble right now.\n\n[Email Support](mailto:support@tidyzon.com)\n[Call Tidyzon](tel:+18156081632)',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={openChat}
          className="ai-chat-button-merged"
          aria-label="Open AI Assistant"
        >
          <img
            src={BOT_IMAGE}
            alt="Tidy A.I. Assistant"
            className="ai-chat-bot-fab"
            width={120}
            height={136}
            decoding="async"
          />
        </button>
      )}

      {isOpen && (
        <div
          className="ai-chat-overlay"
          onClick={closeChat}
          aria-hidden="true"
        />
      )}

      {isOpen && (
        <div
          className="ai-chat-window"
          ref={chatWindowRef}
          role="dialog"
          aria-modal="true"
          aria-label="Tidy A.I. Assistant"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-avatar">
                <img
                  src={BOT_IMAGE}
                  alt=""
                  className="chat-avatar-bot"
                  width={40}
                  height={45}
                  decoding="async"
                />
              </div>
              <div className="chat-title-section">
                <h3 className="chat-title">Tidy A.I Assistant</h3>
                <p className="chat-status">
                  {apiAvailable ? 'AI-Powered · Tidyzon only' : 'Knowledge Base'}
                </p>
              </div>
            </div>
            <div className="chat-header-actions">
              <button
                type="button"
                onClick={clearConversation}
                className="chat-clear-btn"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <Trash2 className="clear-icon" />
              </button>
              <button
                type="button"
                onClick={closeChat}
                className="chat-close-btn"
                aria-label="Close chat"
              >
                <X className="close-icon" />
              </button>
            </div>
          </div>

          <div className="chat-messages">
            <div className="chat-bot-greeting">
              <div className="chat-bot-greeting-figure">
                <img
                  src={BOT_IMAGE}
                  alt="Tidy A.I. Assistant"
                  className="chat-bot-greeting-img"
                  width={140}
                  height={158}
                  decoding="async"
                />
              </div>
              <p className="chat-bot-greeting-label">Tidy A.I. Assistant</p>
              <p className="chat-bot-greeting-sub">Here to help with Tidyzon</p>
            </div>

            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
                className={`chat-message ${
                  message.role === 'user' ? 'user-message' : 'assistant-message'
                }`}
              >
                <div className="message-content">
                  {message.role === 'assistant'
                    ? formatMessage(message.content)
                    : message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message assistant-message">
                <div className="message-content message-content--loading">
                  <Loader className="loading-icon" />
                  <span>AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => {
                setInputMessage(e.target.value)
                if (textareaRef.current) {
                  textareaRef.current.style.height = 'auto'
                  textareaRef.current.style.height =
                    Math.min(textareaRef.current.scrollHeight, 120) + 'px'
                }
              }}
              onKeyPress={handleKeyPress}
              placeholder={
                apiAvailable
                  ? 'Ask about Tidyzon...'
                  : 'Ask about Tidyzon (knowledge base)...'
              }
              className="chat-input"
              rows="1"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="chat-send-btn"
              aria-label="Send message"
            >
              <Send className="send-icon" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AIChatbot
