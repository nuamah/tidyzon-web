import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Validate OpenAI API Key
if (!process.env.OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY is not set in environment variables. AI chatbot functionality will be disabled.')
}

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
}) : null

// Comprehensive Tidyzon Knowledge Base - Matches frontend knowledge base
const TIDYZON_KNOWLEDGE_BASE = {
  company: {
    name: "Tidyzon",
    tagline: "Quality services at your doorstep",
    founded: "2021",
    description: "Tidyzon is a professional mobile cleaning service company that connects customers with verified service providers for premium cleaning services delivered right to their doorstep.",
    mission: "To revolutionize home and car cleaning services by providing convenient, professional, and eco-friendly solutions.",
    location: "Illinois, USA",
    website: "https://tidyzon.com"
  },
  services: {
    carCleaning: {
      name: "Car Cleaning Services",
      description: "Professional mobile car cleaning services with packages designed to fit your needs and budget. Prices for wash packages depend on your vehicle type. Vehicle type like MVP, Truck will incur additional $10 each. Displayed prices are passenger cars only.",
      packages: [
        {
          id: "speed",
          name: "Speed Wash",
          price: "$49.99",
          duration: "30 minutes",
          features: ["Exterior hand wash", "Clean all windows", "Towel dry", "Vacuum - Regular", "Wipe door jambs"]
        },
        {
          id: "deluxe",
          name: "Deluxe Wash",
          price: "$155.00",
          duration: "2 hours 30 minutes",
          popular: true,
          features: ["Exterior hand wash", "Clean all windows", "Towel dry", "Vacuum - Regular", "Wipe door jambs", "Air for dryer", "Air for Vacuum", "Tire shine, rims and air", "Wash Mat", "Armoral and door panel", "Dash Clean and Shine", "Clean cup holders", "Shampoo and door panel", "Shampoo seats & Carpets"]
        },
        {
          id: "premium",
          name: "Premium Wash",
          price: "$249.99",
          duration: "4 hours 30 minutes",
          features: ["Exterior hand wash", "Clean all windows", "Towel dry", "Vacuum - Regular", "Wipe door jambs", "Air for dryer", "Air for Vacuum", "Tire shine, rims and air", "Wash Mat", "Armoral and door panel", "Dash Clean and Shine", "Clean cup holders", "Shampoo and door panel", "Shampoo seats & Carpets", "Machine wax"]
        }
      ]
    },
    trashBinCleaning: {
      name: "Trash Bin Cleaning",
      description: "Professional sanitization service that eliminates odors, bacteria, and germs with eco-friendly solutions.",
      price: "$10.00 per bin",
      duration: "30 minutes",
      features: ["Deep sanitization with eco-friendly solutions", "Odor elimination and bacteria removal", "30-minute quick service"]
    },
    homeCleaning: {
      name: "Home Cleaning",
      description: "Professional home cleaning services will be available soon.",
      status: "Coming Soon"
    }
  },
  team: {
    executives: [
      {
        name: "Dan Grasso",
        position: "Co founder / Board Member",
        bio: "Operations expert focused on optimizing processes, building efficient systems, and ensuring exceptional customer experiences.",
        email: "dan@tidyzon.com"
      },
      {
        name: "Emmanuel Zielonka Berchie",
        position: "Co-Founder / Board Member",
        bio: "Visionary leader driving innovation and strategic growth in the service industry with a passion for excellence.",
        email: "emmanuel@tidyzon.com"
      },
      {
        name: "Martin Zielonka",
        position: "Co founder/ Board Member",
        bio: "Strategic leader with 15+ years of experience in scaling technology companies and driving operational excellence.",
        email: "martin@tidyzon.com"
      },
      {
        name: "Micheal Akwasi Osei",
        position: "Co-Founder / UI Blueprint / Board Member",
        bio: "Innovative UI Blueprint Developer with expertise in translating design systems into scalable, modular front-end architectures.",
        email: "michael@tidyzon.com"
      },
      {
        name: "Dr. Sanju Abraham",
        position: "Team Leader / Supervisor / Board Member",
        bio: "Serial startup CTO (engineering, AI, scaling orgs)",
        email: "sanju@tidyzon.com"
      },
      {
        name: "Isaac Paintsil",
        position: "Board Member",
        bio: "Technology visionary passionate about building scalable platforms and leading engineering teams to deliver innovative solutions.",
        email: "isaac@tidyzon.com"
      }
    ],
    team: [
      {
        name: "Nuamah George",
        position: "Team President / Backend Developer",
        bio: "Experienced project manager overseeing development workflows and ensuring timely delivery of high-quality solutions.",
        email: "george@tidyzon.com"
      },
      {
        name: "Adu Amankwah Isaac",
        position: "Team Assistant / Frontend Supervisor",
        bio: "Frontend supervisor leading the development of user interfaces and ensuring optimal user experiences across all platforms.",
        email: "business.iksofttechnologies@gmail.com"
      },
      {
        name: "Sonie",
        position: "Team Leader Assistant",
        bio: "Supports team operations and assists frontend delivery to ensure consistent UI quality.",
        email: "sonie@tidyzon.com"
      }
    ]
  },
  contact: {
    email: "info@tidyzon.com",
    supportEmail: "info@tidyzon.com",
    phone: "(630) 788-9081",
    address: "708 Saybrook Ct. Romeoville IL 60446",
    businessHours: "Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-6PM",
    responseTime: "Within 24 hours"
  },
  apps: {
    userApp: {
      name: "Tidyzon User App",
      description: "Book professional cleaning services instantly. Track your orders, manage schedules, and enjoy spotless spaces with just a few taps.",
      features: ["Instant service booking", "Real-time order tracking", "Secure payments", "Rate & review services"],
      iosUrl: "https://apps.apple.com/app/tidyzon-user",
      androidUrl: "https://play.google.com/store/apps/details?id=com.tidyzon.user"
    },
    providerApp: {
      name: "Tidyzon Service Provider App",
      description: "Join our network of professional service providers. Accept jobs, manage your schedule, and grow your cleaning business with Tidyzon.",
      features: ["Flexible work schedule", "Instant job notifications", "Quick & secure payments", "Build your reputation"],
      iosUrl: "https://apps.apple.com/app/tidyzon-provider",
      androidUrl: "https://play.google.com/store/apps/details?id=com.tidyzon.provider"
    }
  },
  whyChoose: [
    {
      title: "Advanced Cleaning Equipment",
      description: "Our providers use state-of-the-art equipment to ensure efficient and effective cleaning for every service offered."
    },
    {
      title: "Thorough Background Checks",
      description: "All providers undergo comprehensive background checks to guarantee safety and reliability for our customers."
    },
    {
      title: "Flexible Scheduling",
      description: "Book services at your convenience, with options for immediate or future scheduling to fit your busy lifestyle."
    }
  ],
  faqs: [
    {
      question: "How quickly can I book a service?",
      answer: "You can book a service instantly through our app. Most services are available same-day or within 24 hours."
    },
    {
      question: "Are your service providers insured?",
      answer: "Yes, all our service providers are fully insured and background-checked for your peace of mind."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve major metropolitan areas. Check the app for availability in your specific location."
    },
    {
      question: "Can I cancel or reschedule a booking?",
      answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment through the app."
    },
    {
      question: "What cleaning products do you use?",
      answer: "We use eco-friendly cleaning products that are safe for your family and the environment."
    },
    {
      question: "How do I become a service provider?",
      answer: "You can apply to become a service provider through our app or website. We'll guide you through the application process including background checks and training."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods through our secure payment processing system."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes, we guarantee customer satisfaction. If you're not happy with our service, we'll make it right or provide a full refund."
    }
  ],
  pages: {
    home: {
      title: "Home",
      description: "Main landing page with hero section, services overview, and call-to-action"
    },
    services: {
      title: "Services",
      description: "Detailed information about car cleaning packages, trash bin cleaning, and upcoming home cleaning services"
    },
    about: {
      title: "About",
      description: "Company story, mission, and journey information"
    },
    teams: {
      title: "Teams",
      description: "Meet our executive leadership and team members"
    },
    contact: {
      title: "Contact",
      description: "Contact information, business hours, contact form, and FAQ section"
    },
    getStarted: {
      title: "Get Started",
      description: "Information for both users and service providers on how to get started with Tidyzon"
    },
    terms: {
      title: "Terms and Conditions",
      description: "Legal terms and conditions for using Tidyzon services",
      lastUpdated: "March 2, 2025"
    },
    privacy: {
      title: "Privacy Policy",
      description: "Privacy policy explaining how we collect, use, and protect user data",
      lastUpdated: "March 2, 2025"
    }
  },
  technology: {
    platform: "Mobile app connecting customers with verified service providers",
    paymentProcessing: "Stripe integration for secure payments",
    backgroundChecks: "Comprehensive background verification for all providers",
    ecoFriendly: "Uses environmentally safe cleaning products",
    realTimeTracking: "Real-time order tracking and provider location",
    instantBooking: "Same-day and scheduled service booking"
  },
  brand: {
    primaryColors: {
      green: "rgb(82, 136, 40)",
      blue: "rgb(88, 99, 197)"
    },
    gradient: "linear-gradient(135deg, rgb(82, 136, 40) 0%, rgb(88, 99, 197) 100%)",
    tagline: "Quality services at your doorstep"
  },
  serviceAreas: {
    current: "Major metropolitan areas",
    expansion: "Continuously expanding to new cities",
    availability: "Check the app for specific location availability"
  },
  booking: {
    steps: [
      "Download the Tidyzon app",
      "Create your account",
      "Select your service and package",
      "Choose your preferred time",
      "Confirm and pay securely",
      "Track your service in real-time"
    ],
    requirements: [
      "Valid email address",
      "Phone number for contact",
      "Service location address",
      "Payment method"
    ]
  },
  providerRequirements: [
    "Background check verification",
    "Valid driver's license",
    "Proof of insurance",
    "Professional cleaning equipment",
    "Eco-friendly cleaning products",
    "Reliable transportation",
    "Good communication skills"
  ]
}

// System prompt with comprehensive company information and restrictions
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

app.post('/api/chat', async (req, res) => {
  try {
    console.log('📨 Received chat request')
    const { messages } = req.body

    if (!messages || !Array.isArray(messages)) {
      console.error('❌ Invalid messages format:', messages)
      return res.status(400).json({ error: 'Invalid messages format', message: 'Invalid request format' })
    }

    console.log('💬 User message:', messages[messages.length - 1]?.content)
    console.log('📊 Total messages:', messages.length)

    // Check if OpenAI API key is configured
    if (!openai || !process.env.OPENAI_API_KEY) {
      console.warn('⚠️ OpenAI API key not configured')
      return res.status(503).json({ 
        error: 'AI service unavailable',
        message: "I apologize, but the AI chatbot service is currently unavailable. Please contact us at info@tidyzon.com for assistance."
      })
    }

    console.log('🤖 Calling OpenAI API with model: gpt-3.5-turbo')
    console.log('📝 System prompt length:', SYSTEM_PROMPT.length, 'characters')
    
    // Create chat completion with OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 800,
      temperature: 0.7,
    })

    const assistantMessage = completion.choices[0].message.content
    console.log('✅ OpenAI API call successful')
    console.log('💬 AI Response length:', assistantMessage.length, 'characters')
    console.log('💬 AI Response preview:', assistantMessage.substring(0, 150))

    return res.json({ message: assistantMessage })
  } catch (error) {
    console.error('❌ OpenAI API Error:', error)
    console.error('❌ Error name:', error.name)
    console.error('❌ Error message:', error.message)
    if (error.stack) {
      console.error('❌ Error stack:', error.stack)
    }
    
    // Provide more specific error messages
    let errorMessage = "I apologize, but I'm having trouble processing your request right now. Please try again later or contact us at info@tidyzon.com."
    
    if (error.message && (error.message.includes('API key') || error.message.includes('authentication'))) {
      errorMessage = "The AI service is currently unavailable due to API key configuration issues. Please contact us at info@tidyzon.com for assistance."
    } else if (error.response) {
      // OpenAI API error response
      console.error('❌ OpenAI API Response Error Status:', error.response.status)
      console.error('❌ OpenAI API Response Error Data:', error.response.data)
      if (error.response.status === 401) {
        errorMessage = "The AI service is currently unavailable due to authentication issues. Please check your API key configuration."
      } else if (error.response.status === 429) {
        errorMessage = "The AI service is currently experiencing high demand. Please try again in a moment or contact us at info@tidyzon.com."
      } else if (error.response.status === 500) {
        errorMessage = "The AI service encountered an internal error. Please try again or contact us at info@tidyzon.com."
      }
    } else if (error.code === 'ECONNREFUSED' || error.message.includes('fetch')) {
      errorMessage = "Unable to connect to the AI service. Please ensure the server is running and try again."
    }
    
    return res.status(500).json({ 
      error: 'Failed to process chat request',
      message: errorMessage
    })
  }
})

// Health check endpoint - should always work, even if server has issues
app.get('/api/health', (req, res) => {
  try {
    const healthData = { 
      status: 'ok',
      apiKeyConfigured: !!process.env.OPENAI_API_KEY,
      timestamp: new Date().toISOString(),
      server: 'running'
    }
    console.log('✅ Health check requested:', healthData)
    res.status(200).json(healthData)
  } catch (error) {
    console.error('❌ Health check error:', error)
    // Even if there's an error, try to return something
    res.status(200).json({ 
      status: 'ok',
      apiKeyConfigured: false,
      error: 'Health check had an issue but server is running'
    })
  }
})

// Error handling middleware - must be after all routes
app.use((err, req, res, next) => {
  console.error('Express Error:', err)
  res.status(500).json({ 
    error: 'Internal server error',
    message: "I apologize, but I'm having trouble processing your request right now. Please try again later or contact our support team at info@tidyzon.com."
  })
})

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not found',
    message: 'The requested endpoint was not found.'
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Tidyzon AI Chatbot server running on port ${PORT}`)
  console.log(`📡 Health check available at: http://localhost:${PORT}/api/health`)
  console.log(`💬 Chat endpoint available at: http://localhost:${PORT}/api/chat`)
  
  if (!process.env.OPENAI_API_KEY) {
    console.warn('⚠️  WARNING: OPENAI_API_KEY is not set. AI chatbot will not work.')
    console.warn('   Please create a .env file in the server directory with: OPENAI_API_KEY=your_key_here')
    console.warn('   Or set it in the root .env file')
  } else {
    console.log('✅ OpenAI API key is configured')
    console.log(`🔑 API Key (first 10 chars): ${process.env.OPENAI_API_KEY.substring(0, 10)}...`)
  }
  
  console.log('✅ Server is ready to accept requests')
})

// Handle server errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error)
  console.error('Stack:', error.stack)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason)
})

