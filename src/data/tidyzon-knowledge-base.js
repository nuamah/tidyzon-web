// Tidyzon Comprehensive Knowledge Base
// This file contains all information about Tidyzon for the AI chatbot to reference

export const TIDYZON_KNOWLEDGE_BASE = {
  // Company Overview
  company: {
    name: "Tidyzon",
    tagline: "Quality services at your doorstep",
    founded: "2021",
    description: "Tidyzon is a professional mobile cleaning service company that connects customers with verified service providers for premium cleaning services delivered right to their doorstep.",
    mission: "To revolutionize home and car cleaning services by providing convenient, professional, and eco-friendly solutions.",
    location: "Illinois, USA",
    website: "https://tidyzon.com"
  },

  // Services Offered
  services: {
    carCleaning: {
      name: "Car Cleaning Services",
      description: "Professional mobile car cleaning services with packages designed to fit your needs and budget.",
      packages: [
        {
          id: "speed",
          name: "Speed Wash",
          price: "$49.99",
          duration: "30 minutes",
          features: [
            "Exterior hand wash",
            "Clean all windows", 
            "Towel dry",
            "Vacuum - Regular",
            "Wipe door jambs"
          ]
        },
        {
          id: "deluxe", 
          name: "Deluxe Wash",
          price: "$155.00",
          duration: "2 hours 30 minutes",
          popular: true,
          features: [
            "Exterior hand wash",
            "Clean all windows",
            "Towel dry",
            "Vacuum - Regular",
            "Wipe door jambs",
            "Air for dryer",
            "Air for Vacuum",
            "Tire shine, rims and air",
            "Wash Mat",
            "Armoral and door panel",
            "Dash Clean and Shine",
            "Clean cup holders",
            "Shampoo and door panel",
            "Shampoo seats & Carpets"
          ]
        },
        {
          id: "premium",
          name: "Premium Wash", 
          price: "$249.99",
          duration: "4 hours 30 minutes",
          features: [
            "Exterior hand wash",
            "Clean all windows",
            "Towel dry",
            "Vacuum - Regular",
            "Wipe door jambs",
            "Air for dryer",
            "Air for Vacuum",
            "Tire shine, rims and air",
            "Wash Mat",
            "Armoral and door panel",
            "Dash Clean and Shine",
            "Clean cup holders",
            "Shampoo and door panel",
            "Shampoo seats & Carpets",
            "Machine wax"
          ]
        }
      ]
    },
    
    trashBinCleaning: {
      name: "Trash Bin Cleaning",
      description: "Professional sanitization service that eliminates odors, bacteria, and germs with eco-friendly solutions.",
      price: "$10.00 per bin",
      duration: "30 minutes",
      features: [
        "Deep sanitization with eco-friendly solutions",
        "Odor elimination and bacteria removal",
        "30-minute quick service"
      ]
    },

    homeCleaning: {
      name: "Home Cleaning",
      description: "Comprehensive home cleaning services",
      status: "Coming Soon",
      description: "Professional home cleaning services will be available soon."
    }
  },

  // Team Members
  team: {
    executives: [
      {
        name: "Sarah Johnson",
        position: "Chief Executive Officer",
        bio: "Visionary leader with 15+ years in the service industry, driving Tidyzon's mission to revolutionize home and car cleaning services.",
        email: "sarah@tidyzon.com",
        linkedin: "https://linkedin.com/in/sarahjohnson"
      },
      {
        name: "Michael Chen", 
        position: "Chief Technology Officer",
        bio: "Tech innovator passionate about building scalable platforms that connect customers with trusted service providers seamlessly.",
        email: "michael@tidyzon.com",
        linkedin: "https://linkedin.com/in/michaelchen",
        github: "https://github.com/michaelchen"
      },
      {
        name: "Emily Rodriguez",
        position: "Head of Operations", 
        bio: "Operations expert ensuring every service meets our high standards of quality and customer satisfaction.",
        email: "emily@tidyzon.com",
        linkedin: "https://linkedin.com/in/emilyrodriguez"
      }
    ],
    team: [
      {
        name: "David Kim",
        position: "Lead Developer",
        bio: "Full-stack developer crafting the technology that powers our platform and enhances user experience.",
        email: "david@tidyzon.com",
        linkedin: "https://linkedin.com/in/davidkim",
        github: "https://github.com/davidkim"
      },
      {
        name: "Lisa Thompson",
        position: "Marketing Director",
        bio: "Creative marketer building brand awareness and connecting Tidyzon with customers who value quality service.",
        email: "lisa@tidyzon.com",
        linkedin: "https://linkedin.com/in/lisathompson"
      },
      {
        name: "James Wilson",
        position: "Customer Success Manager",
        bio: "Customer advocate ensuring every interaction exceeds expectations and builds lasting relationships.",
        email: "james@tidyzon.com",
        linkedin: "https://linkedin.com/in/jameswilson"
      }
    ]
  },

  // Contact Information
  contact: {
    email: "info@tidyzon.com",
    supportEmail: "info@tidyzon.com",
    phone: "(630) 788-9081",
    address: "708 Saybrook Ct. Romeoville IL 60446",
    businessHours: "Mon-Fri: 7AM-7PM, Sat-Sun: 9AM-6PM",
    responseTime: "Within 24 hours"
  },

  // Mobile Apps
  apps: {
    userApp: {
      name: "Tidyzon User App",
      description: "Book professional cleaning services instantly. Track your orders, manage schedules, and enjoy spotless spaces with just a few taps.",
      features: [
        "Instant service booking",
        "Real-time order tracking", 
        "Secure payments",
        "Rate & review services"
      ],
      iosUrl: "https://apps.apple.com/app/tidyzon-user",
      androidUrl: "https://play.google.com/store/apps/details?id=com.tidyzon.user"
    },
    providerApp: {
      name: "Tidyzon Service Provider App", 
      description: "Join our network of professional service providers. Accept jobs, manage your schedule, and grow your cleaning business with Tidyzon.",
      features: [
        "Flexible work schedule",
        "Instant job notifications",
        "Quick & secure payments", 
        "Build your reputation"
      ],
      iosUrl: "https://apps.apple.com/app/tidyzon-provider",
      androidUrl: "https://play.google.com/store/apps/details?id=com.tidyzon.provider"
    }
  },

  // Why Choose Tidyzon
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

  // Frequently Asked Questions
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

  // Website Pages
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

  // Technology & Features
  technology: {
    platform: "Mobile app connecting customers with verified service providers",
    paymentProcessing: "Stripe integration for secure payments",
    backgroundChecks: "Comprehensive background verification for all providers",
    ecoFriendly: "Uses environmentally safe cleaning products",
    realTimeTracking: "Real-time order tracking and provider location",
    instantBooking: "Same-day and scheduled service booking"
  },

  // Brand Colors & Design
  brand: {
    primaryColors: {
      green: "rgb(82, 136, 40)",
      blue: "rgb(88, 99, 197)"
    },
    gradient: "linear-gradient(135deg, rgb(82, 136, 40) 0%, rgb(88, 99, 197) 100%)",
    logo: "assets/logo/logo.png",
    tagline: "Quality services at your doorstep"
  },

  // Service Areas
  serviceAreas: {
    current: "Major metropolitan areas",
    expansion: "Continuously expanding to new cities",
    availability: "Check the app for specific location availability"
  },

  // Booking Process
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

  // Provider Requirements
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

// Intelligent search function that finds relevant answers
export const findAnswer = (query) => {
  const searchTerm = query.toLowerCase().trim()
  
  // Keywords mapping for intelligent responses
  const keywordMap = {
    // Services
    'service': 'services',
    'services': 'services',
    'package': 'services',
    'packages': 'services',
    'pricing': 'services',
    'price': 'services',
    'cost': 'services',
    'wash': 'services',
    'cleaning': 'services',
    'car': 'services',
    'vehicle': 'services',
    'speed': 'services',
    'deluxe': 'services',
    'premium': 'services',
    'trash': 'services',
    'bin': 'services',
    'home': 'services',
    
    // Contact
    'contact': 'contact',
    'email': 'contact',
    'phone': 'contact',
    'call': 'contact',
    'address': 'contact',
    'location': 'contact',
    'reach': 'contact',
    'support': 'contact',
    'help': 'contact',
    
    // Team
    'team': 'team',
    'member': 'team',
    'staff': 'team',
    'employee': 'team',
    'who': 'team',
    
    // Apps
    'app': 'apps',
    'download': 'apps',
    'mobile': 'apps',
    'application': 'apps',
    'ios': 'apps',
    'android': 'apps',
    
    // Booking
    'book': 'booking',
    'booking': 'booking',
    'schedule': 'booking',
    'order': 'booking',
    'how to': 'booking',
    
    // FAQ
    'question': 'faqs',
    'faq': 'faqs',
    'insurance': 'faqs',
    'cancel': 'faqs',
    'reschedule': 'faqs',
    'payment': 'faqs',
    'guarantee': 'faqs',
    'provider': 'faqs',
  }
  
  // Extract keywords from query
  const keywords = searchTerm.split(/\s+/).filter(word => word.length > 2)
  const matchedKeywords = keywords.filter(word => keywordMap[word])
  
  // Find best matching section
  let bestMatch = null
  let bestScore = 0
  
  // Check for specific package names
  if (searchTerm.includes('speed wash') || searchTerm.includes('speed')) {
    const speedPackage = TIDYZON_KNOWLEDGE_BASE.services.carCleaning.packages.find(p => p.id === 'speed')
    if (speedPackage) {
      return {
        type: 'package',
        data: speedPackage,
        answer: formatPackageAnswer(speedPackage)
      }
    }
  }
  
  if (searchTerm.includes('deluxe') || searchTerm.includes('deluxe wash')) {
    const deluxePackage = TIDYZON_KNOWLEDGE_BASE.services.carCleaning.packages.find(p => p.id === 'deluxe')
    if (deluxePackage) {
      return {
        type: 'package',
        data: deluxePackage,
        answer: formatPackageAnswer(deluxePackage)
      }
    }
  }
  
  if (searchTerm.includes('premium') || searchTerm.includes('premium wash')) {
    const premiumPackage = TIDYZON_KNOWLEDGE_BASE.services.carCleaning.packages.find(p => p.id === 'premium')
    if (premiumPackage) {
      return {
        type: 'package',
        data: premiumPackage,
        answer: formatPackageAnswer(premiumPackage)
      }
    }
  }
  
  // Check FAQs first
  for (const faq of TIDYZON_KNOWLEDGE_BASE.faqs) {
    const questionWords = faq.question.toLowerCase().split(/\s+/)
    const answerWords = faq.answer.toLowerCase().split(/\s+/)
    const allWords = [...questionWords, ...answerWords]
    
    const matchCount = keywords.filter(word => 
      allWords.some(faqWord => faqWord.includes(word) || word.includes(faqWord))
    ).length
    
    if (matchCount > bestScore) {
      bestScore = matchCount
      bestMatch = {
        type: 'faq',
        data: faq,
        answer: faq.answer
      }
    }
  }
  
  // If good FAQ match, return it
  if (bestScore >= 2) {
    return bestMatch
  }
  
  // Check for contact info
  if (matchedKeywords.some(k => ['contact', 'email', 'phone', 'call', 'address', 'location', 'support', 'help'].includes(k))) {
    const contact = TIDYZON_KNOWLEDGE_BASE.contact
    return {
      type: 'contact',
      data: contact,
      answer: `You can reach us at:\n\n**Email:** ${contact.email}\n**Phone:** ${contact.phone}\n**Address:** ${contact.address}\n**Business Hours:** ${contact.businessHours}`
    }
  }
  
  // Check for services overview
  if (matchedKeywords.some(k => ['service', 'services', 'package', 'packages', 'pricing', 'price', 'cost', 'wash', 'cleaning'].includes(k))) {
    const services = TIDYZON_KNOWLEDGE_BASE.services
    let answer = "**Our Services:**\n\n"
    
    // Car cleaning packages
    answer += "**Car Cleaning Packages:**\n"
    services.carCleaning.packages.forEach(pkg => {
      answer += `• **${pkg.name}** - ${pkg.price} (${pkg.duration})\n`
    })
    
    answer += `\n**Trash Bin Cleaning:** ${services.trashBinCleaning.price} (${services.trashBinCleaning.duration})\n`
    answer += `\n**Home Cleaning:** ${services.homeCleaning.status}\n`
    
    return {
      type: 'services',
      data: services,
      answer: answer
    }
  }
  
  // Check for apps
  if (matchedKeywords.some(k => ['app', 'download', 'mobile', 'application', 'ios', 'android'].includes(k))) {
    const apps = TIDYZON_KNOWLEDGE_BASE.apps
    return {
      type: 'apps',
      data: apps,
      answer: `**Tidyzon User App:**\n${apps.userApp.description}\n\n**Features:**\n${apps.userApp.features.map(f => `• ${f}`).join('\n')}\n\n**Tidyzon Provider App:**\n${apps.providerApp.description}\n\n**Features:**\n${apps.providerApp.features.map(f => `• ${f}`).join('\n')}`
    }
  }
  
  // Check for booking info
  if (matchedKeywords.some(k => ['book', 'booking', 'schedule', 'order', 'how to'].includes(k))) {
    const booking = TIDYZON_KNOWLEDGE_BASE.booking
    return {
      type: 'booking',
      data: booking,
      answer: `**How to Book a Service:**\n\n${booking.steps.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n**Requirements:**\n${booking.requirements.map(req => `• ${req}`).join('\n')}`
    }
  }
  
  // Default response
  if (bestMatch) {
    return bestMatch
  }
  
  // Generic helpful response
  return {
    type: 'general',
    answer: `I'm here to help with information about Tidyzon's services! You can ask me about:\n\n• **Services & Pricing** - Our car cleaning packages, trash bin cleaning, and more\n• **Contact Information** - How to reach us\n• **Booking** - How to book a service\n• **Mobile Apps** - Download our user or provider apps\n• **FAQs** - Common questions and answers\n\nOr contact us directly at ${TIDYZON_KNOWLEDGE_BASE.contact.email} or ${TIDYZON_KNOWLEDGE_BASE.contact.phone}`
  }
}

// Helper to format package answers
const formatPackageAnswer = (pkg) => {
  let answer = `**${pkg.name}**\n\n`
  answer += `**Price:** ${pkg.price}\n`
  answer += `**Duration:** ${pkg.duration}\n\n`
  
  if (pkg.features && pkg.features.length > 0) {
    answer += `**Features:**\n${pkg.features.map(f => `• ${f}`).join('\n')}`
  }
  
  return answer
}

// Legacy search function for compatibility
export const searchKnowledgeBase = (query) => {
  const result = findAnswer(query)
  return result ? [result] : []
}

export default TIDYZON_KNOWLEDGE_BASE
