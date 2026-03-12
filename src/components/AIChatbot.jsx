import React, { useState, useRef, useEffect, useMemo } from 'react'
import { MessageCircle, X, Send, Loader } from 'lucide-react'
import OpenAI from 'openai'
import { TIDYZON_KNOWLEDGE_BASE, findAnswer } from '../data/tidyzon-knowledge-base'
import './AIChatbot.css'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm Tidy A.I. Assistant powered by advanced AI. I'm here to help you with information about our services, pricing, booking, contact details, and more. How can I assist you today?"
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiAvailable, setApiAvailable] = useState(false)
  const [quotaExceeded, setQuotaExceeded] = useState(false) // Track if quota is exceeded
  const messagesEndRef = useRef(null)

  // Initialize OpenAI client - Get API key from environment
  // Get API key from Vite environment variables
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  
  // Debug: Log API key status on component mount
  useEffect(() => {
    console.log('🔍 Checking API Key...')
    console.log('Environment mode:', import.meta.env.MODE)
    console.log('VITE_OPENAI_API_KEY exists:', !!import.meta.env.VITE_OPENAI_API_KEY)
    
    if (apiKey && apiKey.length > 0 && apiKey.startsWith('sk-')) {
      console.log('✅ API Key found and appears valid (length:', apiKey.length, ')')
      console.log('✅ API Key prefix:', apiKey.substring(0, 7) + '...')
      console.log('✅ OpenAI client will be initialized')
      setApiAvailable(true)
      setQuotaExceeded(false) // Reset quota status on mount
    } else if (apiKey && apiKey.length > 0 && (apiKey === 'your_key_here' || !apiKey.startsWith('sk-'))) {
      console.warn('⚠️ API Key appears to be a placeholder or invalid')
      setApiAvailable(false)
    } else {
      console.warn('⚠️ API Key NOT found or invalid!')
      console.warn('💡 To enable AI features:')
      console.warn('   1. Make sure .env file is in project root (same folder as package.json)')
      console.warn('   2. .env file must contain: VITE_OPENAI_API_KEY=sk-your-actual-key')
      console.warn('   3. STOP the dev server (Ctrl+C) and RESTART it (npm run dev)')
      console.warn('   4. Vite only reads .env files when the server STARTS')
      console.warn('📚 Chatbot will use local knowledge base instead')
      setApiAvailable(false)
    }
  }, [apiKey])

  // Initialize OpenAI client only when API key is available
  const openai = useMemo(() => {
    if (apiKey && apiKey.startsWith('sk-')) {
      console.log('🔧 Initializing OpenAI client with API key')
      return new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true, // Required for browser usage
        maxRetries: 0 // Disable retries to avoid multiple 429 errors
      })
    }
    console.log('⚠️ OpenAI client not initialized - no valid API key')
    return null
  }, [apiKey])

  // Check API availability when chat opens
  useEffect(() => {
    if (isOpen) {
      if (apiKey && apiKey.length > 0) {
        setApiAvailable(true)
        // Update initial message if API is available
        if (messages.length === 1 && messages[0].role === 'assistant') {
          setMessages([{
            role: 'assistant',
            content: "Hello! I'm Tidy A.I. Assistant powered by advanced AI. I'm here to help you with information about our services, pricing, booking, contact details, and more. How can I assist you today?"
          }])
        }
      } else {
        setApiAvailable(false)
        setMessages([{
          role: 'assistant',
          content: "Hello! I'm Tidy A.I. Assistant. I can help you with information about our services, pricing, booking, contact details, and more using our knowledge base. How can I assist you today?\n\n*Note: For more detailed AI-powered responses, the OpenAI API key can be configured. For immediate assistance, contact us at info@tidyzon.com or call (630) 788-9081."
        }])
      }
    }
  }, [isOpen, apiKey])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Prevent body scroll on mobile when chatbot is open
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

  // System prompt with comprehensive company information
  const SYSTEM_PROMPT = `You are Tidy A.I Assistant, a professional and knowledgeable AI assistant for Tidyzon, a premium mobile cleaning service company. Your role is to provide accurate, helpful, and detailed information about Tidyzon's services, team, pricing, and features.

COMPREHENSIVE COMPANY INFORMATION:

${JSON.stringify(TIDYZON_KNOWLEDGE_BASE, null, 2)}

CORE RESPONSIBILITIES:
- Answer questions about Tidyzon's services, pricing, booking process, team members, mobile apps, and cleaning-related topics
- Provide detailed, accurate information from the knowledge base above
- Help users understand service packages, features, and pricing
- Guide users through the booking process
- Share contact information when needed
- Explain how to become a service provider

IMPORTANT GUIDELINES:

1. **Answer Quality**: Provide comprehensive, detailed answers. Don't just give short responses - explain features, benefits, and next steps. Use the knowledge base extensively.

2. **Service Information**: When asked about services:
   - List all features included in packages
   - Mention pricing clearly
   - Explain duration and what's included
   - Note that MVP and Truck vehicles incur an additional $10 charge
   - Compare packages when relevant

3. **Contact Information**: Always provide:
   - Email: info@tidyzon.com
   - Phone: (630) 788-9081
   - Address: 708 Saybrook Ct. Romeoville IL 60446
   - Business Hours: Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-6PM

4. **Response Format**: Structure responses clearly:
   - Use **bold** for headings and important terms
   - Use bullet points (•) for lists
   - Use numbered lists for steps
   - Separate sections with line breaks
   - Include actionable next steps

5. **Off-Topic Questions**: If asked about unrelated topics (politics, weather, jokes, other companies, etc.), politely say: "I'm specifically designed to help with Tidyzon's cleaning services. I can help you with our car cleaning packages, trash bin sanitization, booking process, team information, or mobile apps. What would you like to know?"

6. **Prohibited**: Do not provide medical, legal, or financial advice. Do not engage in controversial discussions.

7. **Tone**: Be professional, friendly, enthusiastic, and helpful. Show genuine interest in helping users.

8. **Accuracy**: Always reference the knowledge base. If information isn't in the knowledge base, suggest contacting info@tidyzon.com.

9. **Goal**: Guide users toward:
   - Booking a service
   - Downloading the mobile app
   - Learning more about Tidyzon
   - Becoming a service provider

10. **Examples of Good Responses**:
   - When asked about pricing: Provide all package prices, features, duration, and vehicle type notes
   - When asked about booking: Explain all 6 steps clearly
   - When asked about services: List all services with details
   - When asked about team: Mention key team members and their roles

Remember: Be thorough, helpful, and always use the knowledge base to provide accurate, detailed information.`

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    // Debug: Log current state
    console.log('🔍 DEBUG - handleSendMessage called')
    console.log('🔍 apiKey exists:', !!apiKey)
    console.log('🔍 apiKey starts with sk-:', apiKey?.startsWith('sk-'))
    console.log('🔍 apiKey value:', apiKey ? apiKey.substring(0, 20) + '...' : 'undefined')
    console.log('🔍 openai client exists:', !!openai)
    console.log('🔍 quotaExceeded:', quotaExceeded)
    console.log('🔍 apiAvailable:', apiAvailable)
    console.log('🔍 import.meta.env.VITE_OPENAI_API_KEY:', import.meta.env.VITE_OPENAI_API_KEY ? import.meta.env.VITE_OPENAI_API_KEY.substring(0, 20) + '...' : 'NOT FOUND')

    // ALWAYS try OpenAI API first if API key exists and quota hasn't been exceeded
    // Check apiKey directly from env as fallback
    const effectiveApiKey = apiKey || import.meta.env.VITE_OPENAI_API_KEY
    
    // Create OpenAI client on the fly if it doesn't exist but we have a key
    let effectiveOpenai = openai
    if (!effectiveOpenai && effectiveApiKey && effectiveApiKey.startsWith('sk-')) {
      console.log('🔧 Creating OpenAI client on-the-fly')
      effectiveOpenai = new OpenAI({
        apiKey: effectiveApiKey,
        dangerouslyAllowBrowser: true,
        maxRetries: 0
      })
    }
    
    const shouldUseAPI = effectiveApiKey && effectiveApiKey.startsWith('sk-') && effectiveOpenai && !quotaExceeded
    
    console.log('🔍 effectiveApiKey:', effectiveApiKey ? effectiveApiKey.substring(0, 20) + '...' : 'undefined')
    console.log('🔍 effectiveOpenai exists:', !!effectiveOpenai)
    console.log('🔍 shouldUseAPI:', shouldUseAPI)
    
    if (shouldUseAPI) {
      console.log('✅ All conditions met - Attempting OpenAI API call')
      console.log('🤖 Attempting OpenAI API call with key:', effectiveApiKey.substring(0, 15) + '...')
      console.log('🤖 Sending message to OpenAI API:', userMessage)
      console.log('🤖 System prompt length:', SYSTEM_PROMPT.length, 'characters')
      console.log('🤖 Messages being sent:', newMessages.length, 'messages')

      try {
        const modelName = 'gpt-3.5-turbo'
        console.log('🚀 Making OpenAI API request now...')
        console.log('📋 Using model:', modelName)
        const completion = await effectiveOpenai.chat.completions.create({
          model: modelName,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages
          ],
          max_tokens: 1000,
          temperature: 0.7,
        })
        console.log('✅ OpenAI API request completed successfully')

        const assistantMessage = completion.choices[0].message.content
        console.log('✅ OpenAI API Response received successfully!')
        console.log('✅ Response length:', assistantMessage.length, 'characters')
        console.log('✅ Response preview:', assistantMessage.substring(0, 200))
        
        // Mark API as available since we got a successful response
        setApiAvailable(true)
        setQuotaExceeded(false)
        
        setMessages([...newMessages, { 
          role: 'assistant', 
          content: assistantMessage 
        }])
        setIsLoading(false)
        return // Exit early on success
      } catch (error) {
        console.error('❌ OpenAI API Error:', error)
        console.error('❌ Error name:', error.name)
        console.error('❌ Error message:', error.message)
        console.error('❌ Error status:', error.status)
        
        const errorMessage = (error.message || '').toLowerCase()
        const errorType = error.constructor?.name || error.name || ''
        const statusCode = error.status || error.response?.status || ''
        
        // Handle quota/rate limit errors - fall back to local knowledge base
        if (errorMessage.includes('quota') || 
            errorMessage.includes('rate limit') || 
            errorMessage.includes('429') ||
            errorType.includes('RateLimit') ||
            statusCode === 429) {
          console.log('⚠️ API quota/rate limit exceeded (429 error)')
          console.log('⚠️ Model being used: gpt-3.5-turbo')
          console.log('⚠️ Falling back to local knowledge base')
          setQuotaExceeded(true)
          setApiAvailable(false)
          // Continue to local knowledge base fallback below
        } else if (errorMessage.includes('api key') || 
                   errorMessage.includes('authentication') ||
                   errorMessage.includes('401') ||
                   errorType.includes('Authentication') ||
                   statusCode === 401) {
          console.log('⚠️ API key authentication issue, will use local knowledge base')
          setApiAvailable(false)
          // Continue to local knowledge base fallback below
        } else {
          // For other errors (network, timeout, etc.), try local knowledge base as fallback
          console.log('⚠️ API error occurred, falling back to local knowledge base:', errorMessage)
          console.log('⚠️ Error type:', errorType, 'Status:', statusCode)
        }
      }
    } else {
      console.log('❌ OpenAI API call NOT attempted. Reasons:')
      if (!apiKey || !apiKey.startsWith('sk-')) {
        console.log('   ❌ No valid API key found')
        console.log('   ❌ apiKey value:', apiKey || 'undefined')
        console.log('   ❌ import.meta.env.VITE_OPENAI_API_KEY:', import.meta.env.VITE_OPENAI_API_KEY ? 'EXISTS' : 'NOT FOUND')
      }
      if (quotaExceeded) {
        console.log('   ❌ API quota exceeded')
      }
      if (!openai) {
        console.log('   ❌ OpenAI client not initialized')
        console.log('   ❌ This means apiKey check failed during useMemo initialization')
      }
      console.log('📚 Falling back to local knowledge base')
    }

    // Fallback to local knowledge base
    console.log('📚 Using local knowledge base for:', userMessage)
    try {
      // Handle simple greetings first
      const lowerMessage = userMessage.toLowerCase().trim()
      const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening']
      const isGreeting = greetings.some(greeting => lowerMessage === greeting || lowerMessage.startsWith(greeting + ' '))
      
      let assistantMessage
      if (isGreeting) {
        // Friendly greeting response
        assistantMessage = `Hello! 👋 I'm Tidy A.I. Assistant. I'm here to help you with information about Tidyzon's professional cleaning services.\n\n**What I can help you with:**\n• Car cleaning packages and pricing\n• How to book a service\n• Contact information\n• Mobile apps\n• Becoming a service provider\n• Frequently asked questions\n\n**How can I assist you today?**\n\nTry asking me:\n• "What services do you offer?"\n• "How much does the Deluxe package cost?"\n• "How do I book a service?"\n• "What's your phone number?"\n\nFor immediate assistance, contact us at **info@tidyzon.com** or call **(630) 788-9081**.`
      } else {
        // Use knowledge base for other queries
        const result = findAnswer(userMessage)
        assistantMessage = result?.answer || `I'm here to help! You can ask me about:\n\n• Our car cleaning packages and pricing\n• How to book a service\n• Contact information\n• Mobile apps\n• Becoming a service provider\n\nFor detailed assistance, please contact us at info@tidyzon.com or call (630) 788-9081.`
      }
      
      // Don't add fallback note - user wants API to be primary method
      
      console.log('✅ Local knowledge base response generated, length:', assistantMessage.length)
      
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: assistantMessage 
      }])
    } catch (fallbackError) {
      console.error('❌ Local knowledge base error:', fallbackError)
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: `I apologize, but I'm having trouble processing your request right now. Please contact us directly at info@tidyzon.com or call (630) 788-9081 for assistance.` 
      }])
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

  // Format AI response for better readability
  const formatMessage = (content) => {
    const paragraphs = content.split('\n\n').filter(p => p.trim())
    
    return paragraphs.map((paragraph, index) => {
      const trimmedParagraph = paragraph.trim()
      
      if (trimmedParagraph.length < 50 && (trimmedParagraph.includes(':') || trimmedParagraph.match(/^[A-Z\s]+$/))) {
        return (
          <h4 key={index} className="message-title">
            {trimmedParagraph.replace(':', '')}
          </h4>
        )
      }
      
      if (trimmedParagraph.match(/^[\d\-\*\+]\s/) || trimmedParagraph.includes('\n-') || trimmedParagraph.includes('\n•')) {
        const lines = trimmedParagraph.split('\n').filter(line => line.trim())
        const listItems = lines.map(line => line.trim())
        
        return (
          <ul key={index} className="message-list">
            {listItems.map((item, itemIndex) => {
              const cleanItem = item.replace(/^[\d\-\*\+]\s+/, '').replace(/^[\d]+\.\s+/, '')
              const formattedItem = formatText(cleanItem)
              
              return (
                <li key={itemIndex} className="message-list-item">
                  {formattedItem}
                </li>
              )
            })}
          </ul>
        )
      }
      
      return (
        <p key={index} className="message-paragraph">
          {formatText(trimmedParagraph)}
        </p>
      )
    })
  }

  const formatText = (text) => {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    formatted = formatted.replace(/__(.*?)__/g, '<strong>$1</strong>')
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>')
    formatted = formatted.replace(/_(.*?)_/g, '<em>$1</em>')
    
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-chat-button-merged"
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <X className="chat-button-icon" />
        ) : (
          <MessageCircle className="chat-button-icon" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-avatar">
                <MessageCircle className="avatar-icon" />
              </div>
              <div className="chat-title-section">
                <h3 className="chat-title">Tidy A.I Assistant</h3>
                <p className="chat-status">
                  {apiAvailable ? 'AI-Powered' : 'Knowledge Base'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-btn"
              aria-label="Close chat"
            >
              <X className="close-icon" />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
              >
                <div className="message-content">
                  {message.role === 'assistant' ? formatMessage(message.content) : message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message assistant-message">
                <div className="message-content">
                  <Loader className="loading-icon" />
                  <span>AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={apiAvailable ? "Type your message..." : "Type your message (using knowledge base)..."}
              className="chat-input"
              rows="1"
              disabled={isLoading}
            />
            <button
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
