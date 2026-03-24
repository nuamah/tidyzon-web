import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader } from 'lucide-react'
import { TIDYZON_KNOWLEDGE_BASE } from '../data/tidyzon-knowledge-base'
import './AIChatbotModal.css'

const AIChatbotModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm Tidy A.I. Assistant powered by advanced AI. I'm here to help you with information about our services, pricing, booking, and more. How can I assist you today?"
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiAvailable, setApiAvailable] = useState(true)
  const messagesEndRef = useRef(null)

  // Check API availability on mount
  useEffect(() => {
    if (isOpen) {
      checkApiHealth()
    }
  }, [isOpen])

  const checkApiHealth = async () => {
    try {
      const response = await fetch('/api/health')
      if (response.ok) {
        const data = await response.json()
        setApiAvailable(data.apiKeyConfigured || false)
        if (!data.apiKeyConfigured) {
          setMessages([{
            role: 'assistant',
            content: "Hello! I'm Tidy A.I. Assistant. The AI service is currently being set up. For now, please contact us directly at support@tidyzon.com or call (815) 608-1632 for assistance. We're here to help with all your cleaning service needs!"
          }])
        }
      } else {
        setApiAvailable(false)
      }
    } catch (error) {
      console.error('API health check failed:', error)
      setApiAvailable(false)
      setMessages([{
        role: 'assistant',
        content: "Hello! I'm Tidy A.I. Assistant. The server is currently unavailable. Please contact us at support@tidyzon.com or call (815) 608-1632 for assistance."
      }])
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading || !apiAvailable) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    console.log('🤖 Sending message to AI API:', userMessage)
    console.log('📤 Full messages array:', newMessages)

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

      console.log('📥 Response status:', response.status, response.statusText)

      let data
      try {
        const text = await response.text()
        console.log('📥 Raw response text:', text.substring(0, 200))
        if (!text) {
          throw new Error('Empty response from server')
        }
        data = JSON.parse(text)
        console.log('✅ Parsed response data:', data)
      } catch (parseError) {
        console.error('❌ Failed to parse response:', parseError)
        throw new Error('Invalid response from server')
      }
      
      if (!response.ok) {
        const errorMessage = data.message || data.error || 'Failed to get response'
        console.error('❌ API Error:', errorMessage)
        throw new Error(errorMessage)
      }

      const assistantMessage = data.message || data.response || 'I apologize, but I encountered an error. Please try again or contact us at support@tidyzon.com'
      console.log('✅ AI Response received:', assistantMessage.substring(0, 200))
      
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: assistantMessage 
      }])
    } catch (error) {
      console.error('❌ Chat error:', error)
      console.error('❌ Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      })
      const errorMessage = error.message || ''
      if (errorMessage.includes('unavailable') || errorMessage.includes('configuration') || errorMessage.includes('API key')) {
        setMessages([...newMessages, { 
          role: 'assistant', 
          content: "I'm currently being set up and unavailable right now. Please contact us directly at support@tidyzon.com or call (815) 608-1632 for assistance. We're here to help with all your cleaning service needs!" 
        }])
        setApiAvailable(false)
      } else if (errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError')) {
        setMessages([...newMessages, { 
          role: 'assistant', 
          content: "I'm having trouble connecting to the server. Please make sure the backend server is running on port 3001. Contact us at support@tidyzon.com or call (815) 608-1632 for assistance." 
        }])
      } else {
        setMessages([...newMessages, { 
          role: 'assistant', 
          content: `I apologize, but I encountered an error: ${errorMessage}. Please try again or contact us at support@tidyzon.com or call (815) 608-1632 for assistance.` 
        }])
      }
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

  if (!isOpen) return null

  return (
    <div className="ai-chatbot-modal-overlay" onClick={onClose}>
      <div className="ai-chatbot-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-content">
            <div className="chat-avatar">
              <MessageCircle className="avatar-icon" />
            </div>
            <div className="chat-title-section">
              <h3 className="chat-title">Tidy A.I Assistant (AI-Powered)</h3>
              <p className="chat-status">
                {apiAvailable ? 'AI Active' : 'AI Unavailable - Using Basic Mode'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
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
            placeholder={apiAvailable ? "Type your message..." : "AI unavailable - Contact us at support@tidyzon.com"}
            className="chat-input"
            rows="1"
            disabled={isLoading || !apiAvailable}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading || !apiAvailable}
            className="chat-send-btn"
            aria-label="Send message"
          >
            <Send className="send-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIChatbotModal

