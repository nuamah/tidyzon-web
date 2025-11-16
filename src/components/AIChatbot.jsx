import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader, Sparkles } from 'lucide-react'
import { TIDYZON_KNOWLEDGE_BASE, searchKnowledgeBase } from '../data/tidyzon-knowledge-base'
import './AIChatbot.css'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Tidy A.I. How can I help you today?"
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

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

  const SYSTEM_PROMPT = `You are Tidyzon A.I Assistant, a helpful AI assistant for Tidyzon, a professional mobile cleaning service company. 

COMPREHENSIVE COMPANY INFORMATION:

${JSON.stringify(TIDYZON_KNOWLEDGE_BASE, null, 2)}

IMPORTANT RESTRICTIONS:
- ONLY answer questions related to Tidyzon, its services, pricing, booking process, team members, and general cleaning topics
- If asked about unrelated topics, politely redirect: "I'm specifically designed to help with Tidyzon's cleaning services. Is there anything about our car cleaning, bin sanitization, team, or upcoming home cleaning services I can help you with?"
- Do not provide medical, legal, or financial advice
- Do not engage in controversial discussions
- Always maintain a professional, friendly, and helpful tone
- Use the comprehensive knowledge base above to provide accurate, detailed answers
- If you don't know something about Tidyzon's services, suggest contacting support at info@tidyzon.com

Be concise, helpful, and always try to guide users toward booking a service, downloading the app, or learning more about what Tidyzon offers.

FORMATTING GUIDELINES:
- Use clear paragraphs separated by double line breaks for better readability
- When listing items, use bullet points with clear descriptions
- Include section titles (short phrases ending with colons) to organize information
- Structure service information with clear headings like "Our Services:", "Pricing:", "Benefits:", etc.
- Use **bold text** for important terms, service names, and key features
- Use *italic text* for emphasis and special notes
- Keep responses well-organized and easy to scan
- Use simple, conversational language`

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: newMessages
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage = data.message
      
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: assistantMessage 
      }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our support team at info@tidyzon.com." 
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
    // Split content by double line breaks to create paragraphs
    const paragraphs = content.split('\n\n').filter(p => p.trim())
    
    return paragraphs.map((paragraph, index) => {
      const trimmedParagraph = paragraph.trim()
      
      // Check if paragraph is a title (short line, possibly with colon, or all caps)
      if (trimmedParagraph.length < 50 && (trimmedParagraph.includes(':') || trimmedParagraph.match(/^[A-Z\s]+$/))) {
        return (
          <h4 key={index} className="message-title">
            {trimmedParagraph.replace(':', '')}
          </h4>
        )
      }
      
      // Check if paragraph contains list items (starts with numbers, bullets, or dashes)
      if (trimmedParagraph.match(/^[\d\-\*\+]\s/) || trimmedParagraph.includes('\n-') || trimmedParagraph.includes('\n•')) {
        // Handle lists
        const lines = trimmedParagraph.split('\n').filter(line => line.trim())
        const listItems = lines.map(line => line.trim())
        
        return (
          <ul key={index} className="message-list">
            {listItems.map((item, itemIndex) => {
              // Remove list markers and clean up
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
      
      // Regular paragraph
      return (
        <p key={index} className="message-paragraph">
          {formatText(trimmedParagraph)}
        </p>
      )
    })
  }

  // Format text with markdown-style bold and emphasis
  const formatText = (text) => {
    // Handle bold text **text** or __text__
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    formatted = formatted.replace(/__(.*?)__/g, '<strong>$1</strong>')
    
    // Handle italic text *text* or _text_
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>')
    formatted = formatted.replace(/_(.*?)_/g, '<em>$1</em>')
    
    // Return JSX with dangerouslySetInnerHTML for HTML content
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />
  }

  return (
    <>
      {/* Chat Button with Label */}
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
                <p className="chat-status">Always here to help</p>
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
                  <span>Thinking...</span>
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
              placeholder="Type your message..."
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
