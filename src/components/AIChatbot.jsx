import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader } from 'lucide-react'
import { findAnswer, TIDYZON_KNOWLEDGE_BASE } from '../data/tidyzon-knowledge-base'
import './AIChatbot.css'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Tidy A.I. Assistant. How can I help you today? You can ask me about our services, pricing, booking, contact information, or anything else about Tidyzon!"
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

  const handleSendMessage = () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      // Check for off-topic questions
      const lowerMessage = userMessage.toLowerCase()
      const offTopicKeywords = ['weather', 'joke', 'politics', 'religion', 'sports', 'news', 'movie', 'music', 'recipe']
      const isOffTopic = offTopicKeywords.some(keyword => lowerMessage.includes(keyword))

      if (isOffTopic) {
        setMessages([...newMessages, { 
          role: 'assistant', 
          content: "I'm specifically designed to help with Tidyzon's cleaning services. Is there anything about our car cleaning, trash bin sanitization, booking process, or contact information I can help you with?" 
        }])
        setIsLoading(false)
        return
      }

      // Find answer from knowledge base
      const result = findAnswer(userMessage)
      let assistantMessage = result.answer || "I'm here to help! You can ask me about our services, pricing, how to book, contact information, or download our mobile apps. For more specific questions, please contact us at info@tidyzon.com or call (630) 788-9081."

      // Add helpful context if answer is generic
      if (result.type === 'general') {
        assistantMessage += `\n\nFeel free to ask me about:\n• Our car cleaning packages (Speed Wash, Deluxe Wash, Premium Wash)\n• Trash bin cleaning services\n• How to book a service\n• Contact information\n• Mobile apps`
      }

      setMessages([...newMessages, { 
        role: 'assistant', 
        content: assistantMessage 
      }])
      setIsLoading(false)
    }, 300) // Small delay to show loading state
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
