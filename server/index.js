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

// Comprehensive Tidyzon Knowledge Base
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
      packages: [
        {
          name: "Speed Wash",
          price: "$49.99",
          duration: "30 minutes",
          features: ["Exterior hand wash", "Clean all windows", "Towel dry", "Vacuum - Regular", "Wipe door jambs"]
        },
        {
          name: "Deluxe Wash",
          price: "$155.00",
          duration: "2 hours 30 minutes",
          popular: true,
          features: ["Exterior hand wash", "Clean all windows", "Towel dry", "Vacuum - Regular", "Wipe door jambs", "Air for dryer", "Air for Vacuum", "Tire shine, rims and air", "Wash Mat", "Armoral and door panel", "Dash Clean and Shine", "Clean cup holders", "Shampoo and door panel", "Shampoo seats & Carpets"]
        },
        {
          name: "Premium Wash",
          price: "$249.99",
          duration: "4 hours 30 minutes",
          features: ["Exterior hand wash", "Clean all windows", "Towel dry", "Vacuum - Regular", "Wipe door jambs", "Air for dryer", "Air for Vacuum", "Tire shine, rims and air", "Wash Mat", "Armoral and door panel", "Dash Clean and Shine", "Clean cup holders", "Shampoo and door panel", "Shampoo seats & Carpets", "machine wax"]
        }
      ]
    },
    trashBinCleaning: {
      name: "Trash Bin Cleaning",
      price: "$10.00 per bin",
      duration: "30 minutes",
      features: ["Deep sanitization with eco-friendly solutions", "Odor elimination and bacteria removal", "30-minute quick service"]
    },
    homeCleaning: {
      name: "Home Cleaning",
      status: "Coming Soon"
    }
  },
  team: {
    executives: [
      {
        name: "Sarah Johnson",
        position: "Chief Executive Officer",
        bio: "Visionary leader with 15+ years in the service industry, driving Tidyzon's mission to revolutionize home and car cleaning services.",
        email: "sarah@tidyzon.com"
      },
      {
        name: "Michael Chen",
        position: "Chief Technology Officer",
        bio: "Tech innovator passionate about building scalable platforms that connect customers with trusted service providers seamlessly.",
        email: "michael@tidyzon.com"
      },
      {
        name: "Emily Rodriguez",
        position: "Head of Operations",
        bio: "Operations expert ensuring every service meets our high standards of quality and customer satisfaction.",
        email: "emily@tidyzon.com"
      }
    ],
    team: [
      {
        name: "David Kim",
        position: "Lead Developer",
        bio: "Full-stack developer crafting the technology that powers our platform and enhances user experience.",
        email: "david@tidyzon.com"
      },
      {
        name: "Lisa Thompson",
        position: "Marketing Director",
        bio: "Creative marketer building brand awareness and connecting Tidyzon with customers who value quality service.",
        email: "lisa@tidyzon.com"
      },
      {
        name: "James Wilson",
        position: "Customer Success Manager",
        bio: "Customer advocate ensuring every interaction exceeds expectations and builds lasting relationships.",
        email: "james@tidyzon.com"
      }
    ]
  },
  contact: {
    email: "info@tidyzon.com",
    supportEmail: "info@tidyzon.com",
    phone: "(555) 123-4567",
    address: "123 Clean Street, Suite 100, City, ST 12345",
    businessHours: "Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-6PM"
  },
  apps: {
    userApp: {
      name: "Tidyzon User App",
      features: ["Instant service booking", "Real-time order tracking", "Secure payments", "Rate & review services"],
      iosUrl: "https://apps.apple.com/app/tidyzon-user",
      androidUrl: "https://play.google.com/store/apps/details?id=com.tidyzon.user"
    },
    providerApp: {
      name: "Tidyzon Service Provider App",
      features: ["Flexible work schedule", "Instant job notifications", "Quick & secure payments", "Build your reputation"],
      iosUrl: "https://apps.apple.com/app/tidyzon-provider",
      androidUrl: "https://play.google.com/store/apps/details?id=com.tidyzon.provider"
    }
  },
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
    }
  ]
}

// System prompt with comprehensive company information and restrictions
const SYSTEM_PROMPT = `You are Tidy A.I Assistant, a helpful AI assistant for Tidyzon, a professional mobile cleaning service company. 

COMPREHENSIVE COMPANY INFORMATION:

${JSON.stringify(TIDYZON_KNOWLEDGE_BASE, null, 2)}

IMPORTANT RESTRICTIONS:
- ONLY answer questions related to Tidyzon, its services, pricing, booking process, team members, and general cleaning topics
- If asked about unrelated topics (politics, religion, other companies, personal advice, etc.), politely redirect: "I'm specifically designed to help with Tidyzon's cleaning services. Is there anything about our car cleaning, bin sanitization, team, or upcoming home cleaning services I can help you with?"
- Do not provide medical, legal, or financial advice
- Do not engage in controversial discussions
- Always maintain a professional, friendly, and helpful tone
- Use the comprehensive knowledge base above to provide accurate, detailed answers
- If you don't know something about Tidyzon's services, suggest contacting support at info@tidyzon.com

Be concise, helpful, and always try to guide users toward booking a service, downloading the app, or learning more about what Tidyzon offers.`

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
      message: "I apologize, but I'm having trouble processing your request right now. Please try again later or contact our support team at info@tidyzon.com."
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

