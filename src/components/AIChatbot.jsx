import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader, Sparkles } from 'lucide-react'
import { TIDYZON_KNOWLEDGE_BASE, searchKnowledgeBase } from '../data/tidyzon-knowledge-base'
import './AIChatbot.css'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Tidyzon A.I Assistant. I'm here to help you with any questions about Tidyzon's cleaning services. How can I assist you today?"
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
- If you don't know something about Tidyzon's services, suggest contacting support at support@tidyzon.com

Be concise, helpful, and always try to guide users toward booking a service, downloading the app, or learning more about what Tidyzon offers.`

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      const API_KEY = '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'
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage = data.choices[0].message.content
      
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: assistantMessage 
      }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our support team at support@tidyzon.com." 
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
                  {message.content}
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
              placeholder="Ask me anything about Tidyzon..."
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
