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
          id: "speed-interior",
          name: "Speed Package (Interior only)",
          price: "$29.99",
          duration: "15 minutes",
          features: [
            "Vacuum - Regular",
            "Wipe door jambs"
          ],
          excludedFeatures: [
            "Deep stain",
            "Pet removal",
            "Excessive trash removal",
            "Heavy dirt"
          ]
        },
        {
          id: "speed",
          name: "Speed Package",
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
    email: "support@tidyzon.com",
    supportEmail: "support@tidyzon.com",
    phone: "(815) 608-1632",
    address: "708 Saybrook Ct. Romeoville IL 60446",
    businessHours: "Mon-Sun: 7AM - 7PM",
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

// Enhanced intelligent search function with professional response structure
export const findAnswer = (query) => {
  const searchTerm = query.toLowerCase().trim()
  const words = searchTerm.split(/\s+/).filter(w => w.length > 1)
  
  // Comprehensive keyword mapping with synonyms
  const keywordCategories = {
    services: ['service', 'services', 'package', 'packages', 'pricing', 'price', 'prices', 'cost', 'costs', 'wash', 'washing', 'cleaning', 'clean', 'car', 'cars', 'vehicle', 'vehicles', 'auto', 'automobile', 'speed', 'deluxe', 'premium', 'trash', 'bin', 'bins', 'sanitization', 'home', 'house', 'residential'],
    contact: ['contact', 'email', 'emails', 'phone', 'telephone', 'call', 'calling', 'address', 'location', 'locations', 'reach', 'reachable', 'support', 'help', 'assistance', 'helpdesk', 'customer service', 'get in touch', 'reach out', 'where are you', 'how to contact'],
    booking: ['book', 'booking', 'bookings', 'schedule', 'scheduling', 'appointment', 'appointments', 'order', 'ordering', 'reserve', 'reservation', 'how to book', 'how do i book', 'how can i book', 'sign up', 'register', 'registration'],
    apps: ['app', 'apps', 'application', 'applications', 'download', 'downloading', 'mobile', 'phone app', 'ios', 'android', 'iphone', 'ipad', 'google play', 'app store', 'install'],
    provider: ['provider', 'providers', 'become a provider', 'work for', 'join as provider', 'service provider', 'contractor', 'independent contractor', 'earn money', 'make money'],
    faq: ['question', 'questions', 'faq', 'faqs', 'insurance', 'insured', 'cancel', 'cancellation', 'canceled', 'reschedule', 'rescheduling', 'payment', 'payments', 'pay', 'guarantee', 'guarantees', 'refund', 'refunds', 'areas', 'locations', 'products', 'equipment'],
    team: ['team', 'teams', 'member', 'members', 'staff', 'employee', 'employees', 'who', 'people', 'founder', 'founders', 'leadership', 'executive']
  }
  
  // Score each category based on keyword matches
  const categoryScores = {}
  Object.keys(keywordCategories).forEach(category => {
    categoryScores[category] = 0
    keywordCategories[category].forEach(keyword => {
      if (searchTerm.includes(keyword)) {
        categoryScores[category] += 1
      }
    })
  })
  
  // Find the highest scoring category
  const topCategory = Object.keys(categoryScores).reduce((a, b) => 
    categoryScores[a] > categoryScores[b] ? a : b
  )
  const topScore = categoryScores[topCategory]
  
  // Specific package detection with variations
  const packagePatterns = {
    'speed-interior': ['interior only', 'interior-only', 'speed interior', 'interior package', '$29.99', '29.99 interior'],
    speed: ['speed', 'speed package', 'speed wash', 'basic', 'quick', 'fast', 'economy', 'standard'],
    deluxe: ['deluxe', 'deluxe wash', 'mid', 'middle', 'intermediate', 'popular'],
    premium: ['premium', 'premium wash', 'full', 'complete', 'comprehensive', 'top', 'best', 'luxury']
  }
  
  // Check for specific package queries
  for (const [packageId, patterns] of Object.entries(packagePatterns)) {
    if (patterns.some(pattern => searchTerm.includes(pattern))) {
      const pkg = TIDYZON_KNOWLEDGE_BASE.services.carCleaning.packages.find(p => p.id === packageId)
      if (pkg) {
        return {
          type: 'package',
          data: pkg,
          answer: formatPackageAnswerProfessional(pkg)
        }
      }
    }
  }
  
  // Enhanced FAQ matching with better scoring
  let bestFaqMatch = null
  let bestFaqScore = 0
  
  for (const faq of TIDYZON_KNOWLEDGE_BASE.faqs) {
    const questionLower = faq.question.toLowerCase()
    const answerLower = faq.answer.toLowerCase()
    const allText = `${questionLower} ${answerLower}`
    
    // Count exact word matches
    let score = 0
    words.forEach(word => {
      if (allText.includes(word)) {
        score += 2 // Exact word match
      }
      // Check for partial matches
      if (allText.split(/\s+/).some(textWord => textWord.includes(word) || word.includes(textWord))) {
        score += 1
      }
    })
    
    if (score > bestFaqScore) {
      bestFaqScore = score
      bestFaqMatch = {
        type: 'faq',
        data: faq,
        answer: formatFaqAnswer(faq)
      }
    }
  }
  
  // Return FAQ if good match
  if (bestFaqScore >= 3) {
    return bestFaqMatch
  }
  
  // Contact information queries
  if (topCategory === 'contact' && topScore > 0) {
    const contact = TIDYZON_KNOWLEDGE_BASE.contact
    return {
      type: 'contact',
      data: contact,
      answer: formatContactAnswer(contact)
    }
  }
  
  // Services overview queries
  if (topCategory === 'services' && topScore > 0) {
    return {
      type: 'services',
      data: TIDYZON_KNOWLEDGE_BASE.services,
      answer: formatServicesAnswer(TIDYZON_KNOWLEDGE_BASE.services)
    }
  }
  
  // Provider queries
  if (topCategory === 'provider' && topScore > 0) {
    return {
      type: 'provider',
      data: TIDYZON_KNOWLEDGE_BASE.providerRequirements,
      answer: formatProviderAnswer()
    }
  }
  
  // Apps queries
  if (topCategory === 'apps' && topScore > 0) {
    const apps = TIDYZON_KNOWLEDGE_BASE.apps
    return {
      type: 'apps',
      data: apps,
      answer: formatAppsAnswer(apps)
    }
  }
  
  // Booking queries
  if (topCategory === 'booking' && topScore > 0) {
    const booking = TIDYZON_KNOWLEDGE_BASE.booking
    return {
      type: 'booking',
      data: booking,
      answer: formatBookingAnswer(booking)
    }
  }
  
  // Team queries
  if (topCategory === 'team' && topScore > 0) {
    return {
      type: 'team',
      data: TIDYZON_KNOWLEDGE_BASE.team,
      answer: formatTeamAnswer()
    }
  }
  
  // Return best FAQ match if available
  if (bestFaqMatch && bestFaqScore > 0) {
    return bestFaqMatch
  }
  
  // Default professional response
  return {
    type: 'general',
    answer: formatGeneralAnswer()
  }
}

// Professional formatting functions for structured responses

const formatPackageAnswerProfessional = (pkg) => {
  let answer = `**${pkg.name}**\n\n`
  answer += `**Investment:** ${pkg.price}\n`
  answer += `**Service Duration:** ${pkg.duration}\n\n`
  
  if (pkg.features && pkg.features.length > 0) {
    answer += `**What's Included:**\n\n`
    pkg.features.forEach((feature, index) => {
      answer += `${index + 1}. ${feature}\n`
    })
  }

  if (pkg.excludedFeatures && pkg.excludedFeatures.length > 0) {
    answer += `\n**Does not include:**\n\n`
    pkg.excludedFeatures.forEach((item) => {
      answer += `• ${item}\n`
    })
  }
  
  answer += `\n**Next Steps:**\n`
  answer += `• Download our mobile app to book this package\n`
  answer += `• Select your preferred date and time\n`
  answer += `• Our verified provider will arrive at your location\n\n`
  answer += `*Note: Prices shown are for passenger cars. MVP and Truck vehicles incur an additional $10 charge.*\n\n`
  answer += `For questions or to book directly, contact us at **${TIDYZON_KNOWLEDGE_BASE.contact.email}** or call **${TIDYZON_KNOWLEDGE_BASE.contact.phone}**`
  
  return answer
}

const formatContactAnswer = (contact) => {
  let answer = `**Contact Information**\n\n`
  answer += `We're here to help! Here's how you can reach us:\n\n`
  answer += `**Email:** ${contact.email}\n`
  answer += `**Phone:** ${contact.phone}\n`
  answer += `**Physical Address:**\n${contact.address}\n\n`
  answer += `**Business Hours:**\n${contact.businessHours}\n\n`
  answer += `**Response Time:**\nWe typically respond to inquiries within ${contact.responseTime.toLowerCase()}.\n\n`
  answer += `**Preferred Contact Method:**\nFor fastest response, please email us at **${contact.email}** or call during business hours.`
  
  return answer
}

const formatServicesAnswer = (services) => {
  let answer = `**Our Professional Cleaning Services**\n\n`
  answer += `At Tidyzon, we offer comprehensive cleaning solutions designed to meet your needs:\n\n`
  
  answer += `**🚗 Car Cleaning Packages**\n\n`
  answer += `Choose from our three professional packages:\n\n`
  
  services.carCleaning.packages.forEach((pkg, index) => {
    const popularBadge = pkg.popular ? ' *Most Popular*' : ''
    answer += `${index + 1}. **${pkg.name}**${popularBadge}\n`
    answer += `   • Price: ${pkg.price}\n`
    answer += `   • Duration: ${pkg.duration}\n`
    answer += `   • Features: ${pkg.features.length} services included\n\n`
  })
  
  answer += `*Note: Prices are for passenger cars. MVP and Truck vehicles require an additional $10 fee.*\n\n`
  
  answer += `**🗑️ Trash Bin Cleaning**\n\n`
  answer += `• Price: ${services.trashBinCleaning.price}\n`
  answer += `• Duration: ${services.trashBinCleaning.duration}\n`
  answer += `• Professional sanitization with eco-friendly solutions\n\n`
  
  answer += `**🏠 Home Cleaning**\n\n`
  answer += `${services.homeCleaning.status} - ${services.homeCleaning.description}\n\n`
  
  answer += `**Why Choose Tidyzon?**\n\n`
  TIDYZON_KNOWLEDGE_BASE.whyChoose.forEach(item => {
    answer += `• **${item.title}** - ${item.description}\n`
  })
  
  answer += `\n**Ready to Book?**\n`
  answer += `Download our app or contact us at **${TIDYZON_KNOWLEDGE_BASE.contact.email}** or **${TIDYZON_KNOWLEDGE_BASE.contact.phone}**`
  
  return answer
}

const formatBookingAnswer = (booking) => {
  let answer = `**How to Book a Service with Tidyzon**\n\n`
  answer += `Booking is quick and easy! Follow these simple steps:\n\n`
  
  booking.steps.forEach((step, index) => {
    answer += `**Step ${index + 1}:** ${step}\n`
  })
  
  answer += `\n**What You'll Need:**\n\n`
  booking.requirements.forEach(req => {
    answer += `✓ ${req}\n`
  })
  
  answer += `\n**Additional Information:**\n\n`
  answer += `• **Same-Day Booking:** Most services are available same-day or within 24 hours\n`
  answer += `• **Flexible Scheduling:** Choose a time that works best for you\n`
  answer += `• **Secure Payments:** All major credit cards and digital payment methods accepted\n`
  answer += `• **Real-Time Tracking:** Track your service provider's arrival in real-time\n\n`
  
  answer += `**Get Started Now:**\n`
  answer += `Download our mobile app from the App Store or Google Play, or contact us at **${TIDYZON_KNOWLEDGE_BASE.contact.email}** for assistance.`
  
  return answer
}

const formatAppsAnswer = (apps) => {
  let answer = `**Tidyzon Mobile Applications**\n\n`
  answer += `We offer two powerful mobile apps to enhance your experience:\n\n`
  
  answer += `**📱 Tidyzon User App**\n\n`
  answer += `${apps.userApp.description}\n\n`
  answer += `**Key Features:**\n`
  apps.userApp.features.forEach(feature => {
    answer += `• ${feature}\n`
  })
  answer += `\n**Download:**\n`
  answer += `• iOS: Available on the App Store\n`
  answer += `• Android: Available on Google Play\n\n`
  
  answer += `**👷 Tidyzon Provider App**\n\n`
  answer += `${apps.providerApp.description}\n\n`
  answer += `**Key Features:**\n`
  apps.providerApp.features.forEach(feature => {
    answer += `• ${feature}\n`
  })
  answer += `\n**Download:**\n`
  answer += `• iOS: Available on the App Store\n`
  answer += `• Android: Available on Google Play\n\n`
  
  answer += `**Need Help?**\n`
  answer += `For app support or questions, contact us at **${TIDYZON_KNOWLEDGE_BASE.contact.email}** or **${TIDYZON_KNOWLEDGE_BASE.contact.phone}**`
  
  return answer
}

const formatProviderAnswer = () => {
  let answer = `**Become a Tidyzon Service Provider**\n\n`
  answer += `Join our network of professional service providers and start earning today!\n\n`
  
  answer += `**Requirements to Get Started:**\n\n`
  TIDYZON_KNOWLEDGE_BASE.providerRequirements.forEach((req, index) => {
    answer += `${index + 1}. ${req}\n`
  })
  
  answer += `\n**Benefits of Being a Tidyzon Provider:**\n\n`
  answer += `• Flexible work schedule - work when you want\n`
  answer += `• Competitive earnings with tips\n`
  answer += `• Instant job notifications\n`
  answer += `• Quick and secure payments\n`
  answer += `• Build your reputation through reviews\n`
  answer += `• Support from our team\n\n`
  
  answer += `**How to Apply:**\n\n`
  answer += `1. Download the Tidyzon Provider App\n`
  answer += `2. Complete the application process\n`
  answer += `3. Pass background verification\n`
  answer += `4. Complete mandatory training\n`
  answer += `5. Start accepting jobs!\n\n`
  
  answer += `**Get Started:**\n`
  answer += `Visit our website or contact us at **${TIDYZON_KNOWLEDGE_BASE.contact.email}** or **${TIDYZON_KNOWLEDGE_BASE.contact.phone}** to learn more.`
  
  return answer
}

const formatFaqAnswer = (faq) => {
  let answer = `**${faq.question}**\n\n`
  answer += `${faq.answer}\n\n`
  answer += `**Need More Help?**\n`
  answer += `If you have additional questions, feel free to contact us at **${TIDYZON_KNOWLEDGE_BASE.contact.email}** or call **${TIDYZON_KNOWLEDGE_BASE.contact.phone}**. We're here to assist you!`
  
  return answer
}

const formatTeamAnswer = () => {
  let answer = `**Meet the Tidyzon Team**\n\n`
  answer += `Our dedicated team of professionals is committed to delivering exceptional service:\n\n`
  
  answer += `**Executive Leadership:**\n\n`
  TIDYZON_KNOWLEDGE_BASE.team.executives.forEach(exec => {
    answer += `• **${exec.name}** - ${exec.position}\n`
  })
  
  answer += `\n**Our Team:**\n\n`
  TIDYZON_KNOWLEDGE_BASE.team.team.forEach(member => {
    answer += `• **${member.name}** - ${member.position}\n`
  })
  
  answer += `\n**Learn More:**\n`
  answer += `Visit our Teams page to see full profiles and learn more about our team members.\n\n`
  answer += `**Contact:**\n`
  answer += `For team-related inquiries, email us at **${TIDYZON_KNOWLEDGE_BASE.contact.email}**`
  
  return answer
}

const formatGeneralAnswer = () => {
  let answer = `**Welcome to Tidyzon!**\n\n`
  answer += `I'm here to help you with information about Tidyzon's professional cleaning services. Here's what I can assist you with:\n\n`
  
  answer += `**📋 Services & Pricing**\n`
  answer += `• Car cleaning packages (Speed, Deluxe, Premium)\n`
  answer += `• Trash bin sanitization\n`
  answer += `• Home cleaning (coming soon)\n\n`
  
  answer += `**📞 Contact Information**\n`
  answer += `• Email: ${TIDYZON_KNOWLEDGE_BASE.contact.email}\n`
  answer += `• Phone: ${TIDYZON_KNOWLEDGE_BASE.contact.phone}\n`
  answer += `• Address: ${TIDYZON_KNOWLEDGE_BASE.contact.address}\n\n`
  
  answer += `**📱 Mobile Apps**\n`
  answer += `• User app for booking services\n`
  answer += `• Provider app for service providers\n\n`
  
  answer += `**❓ Frequently Asked Questions**\n`
  answer += `• Booking process\n`
  answer += `• Payment methods\n`
  answer += `• Cancellation policies\n`
  answer += `• Provider information\n\n`
  
  answer += `**💼 Become a Provider**\n`
  answer += `• Requirements and application process\n`
  answer += `• Benefits and earnings\n\n`
  
  answer += `**How can I help you today?**\n`
  answer += `Try asking me about:\n`
  answer += `• "What services do you offer?"\n`
  answer += `• "How much does the Deluxe package cost?"\n`
  answer += `• "How do I book a service?"\n`
  answer += `• "What's your phone number?"\n\n`
  answer += `Or contact us directly at **${TIDYZON_KNOWLEDGE_BASE.contact.email}** or **${TIDYZON_KNOWLEDGE_BASE.contact.phone}**`
  
  return answer
}

// Legacy function for backward compatibility
const formatPackageAnswer = (pkg) => {
  return formatPackageAnswerProfessional(pkg)
}

// Legacy search function for compatibility
export const searchKnowledgeBase = (query) => {
  const result = findAnswer(query)
  return result ? [result] : []
}

export default TIDYZON_KNOWLEDGE_BASE
