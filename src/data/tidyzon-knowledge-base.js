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
            "Towel dry"
          ],
          addons: [
            "Vacuum - Regular"
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
            "Towel dry"
          ],
          addons: [
            "Tire shine, rimps and air",
            "Wipe door jans",
            "Vacuum",
            "Wash Mat",
            "Dashboard Shine",
            "Air for dryer",
            "Air for Vacuum",
            "Armoral and door panel",
            "Dash Clean",
            "Clean cup holders",
            "Shampoo and door panel"
          ]
        },
        {
          id: "premium",
          name: "Premium Wash", 
          price: "$199.99",
          duration: "4 hours 30 minutes",
          features: [
            "Exterior hand wash",
            "Clean all windows",
            "Towel dry"
          ],
          addons: [
            "Tire shine, rimps and air",
            "Wipe door jans",
            "Vacuum",
            "Wash Mat",
            "Dashboard Shine",
            "Air for dryer",
            "Air for Vacuum",
            "Armoral and door panel",
            "Dash Clean",
            "Clean cup holders",
            "Shampoo and door panel",
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
    supportEmail: "support@tidyzon.com",
    phone: "(555) 123-4567",
    address: "123 Clean Street, Suite 100, City, ST 12345",
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

// Helper function to search the knowledge base
export const searchKnowledgeBase = (query) => {
  const searchTerm = query.toLowerCase()
  const results = []
  
  // Search through all sections
  Object.keys(TIDYZON_KNOWLEDGE_BASE).forEach(section => {
    const sectionData = TIDYZON_KNOWLEDGE_BASE[section]
    
    if (typeof sectionData === 'object') {
      if (Array.isArray(sectionData)) {
        sectionData.forEach(item => {
          if (JSON.stringify(item).toLowerCase().includes(searchTerm)) {
            results.push({ section, item })
          }
        })
      } else {
        if (JSON.stringify(sectionData).toLowerCase().includes(searchTerm)) {
          results.push({ section, data: sectionData })
        }
      }
    } else if (typeof sectionData === 'string' && sectionData.toLowerCase().includes(searchTerm)) {
      results.push({ section, data: sectionData })
    }
  })
  
  return results
}

export default TIDYZON_KNOWLEDGE_BASE
