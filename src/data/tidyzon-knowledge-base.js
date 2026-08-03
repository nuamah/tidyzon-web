// Tidyzon Comprehensive Knowledge Base
// Single source of truth for the AI chatbot (DeepSeek) across all site pages

export const TIDYZON_KNOWLEDGE_BASE = {
  company: {
    name: 'Tidyzon',
    tagline: 'Quality services at your doorstep',
    founded: '2021',
    website: 'https://tidyzon.com',
    location: '708 Saybrook Ct., Romeoville, IL 60446, USA',
    description:
      'Tidyzon is a marketplace that connects customers with verified service providers for premium mobile cleaning services delivered to their doorstep — including car cleaning and trash bin sanitization.',
    journey:
      'Tidyzon was born out of a desire to simplify everyday chores by connecting consumers with reliable service providers. Founded in 2021, the mission was clear: deliver quality service right at your doorstep. Today Tidyzon stands as a testament to innovation and dedication, ensuring every task is handled with care and precision.',
    mission:
      'To revolutionize how cleaning services are delivered — exceptional, seamless service that exceeds expectations. Empower providers with tools and training, foster trust and reliability, and redefine quality service one task at a time. Providers undergo rigorous background checks and training; customer satisfaction is the priority.',
    vision:
      'A future where quality service is seamlessly integrated into everyday life. Set new standards of excellence, empower local providers, leverage technology for a sustainable ecosystem that benefits consumers and providers, and expand reach while prioritizing sustainability and community engagement.',
    qualityCommitment:
      'Providers undergo rigorous training and background checks. Stringent equipment and skill standards, quality assurance on every job, continuous improvement from customer feedback, and a culture of accountability and transparency.',
  },

  contact: {
    email: 'support@tidyzon.com',
    privacyEmail: 'privacy@tidyzon.com',
    phone: '(815) 608-1632',
    address: '708 Saybrook Ct. Romeoville IL 60446',
    businessHours: 'Mon–Sun: 7AM – 7PM',
    responseTime: 'Within 24 hours',
    social: {
      facebook: 'Facebook / Tidyzon',
      instagram: '@tidyzon',
      tiktok: 'TikTok / Tidyzon',
    },
  },

  services: {
    overview:
      'Top-tier cleaning solutions delivered to your doorstep. Primary offerings: mobile car cleaning packages and trash bin cleaning. Home cleaning is coming soon.',
    vehicleSurcharge:
      'Prices shown are for passenger cars only. MVP and Truck vehicles incur an additional $10 charge each.',
    carCleaning: {
      name: 'Car Cleaning Services',
      description:
        'Professional mobile car cleaning with thorough interior vacuum, dashboard polish, window cleaning, and exterior wash options. Bundle wash packages include listed add-ons.',
      packages: [
        {
          id: 'speed-interior',
          name: 'Speed Package',
          title: 'SPEED - INTERIOR ONLY',
          price: '$29.99',
          duration: '15 minutes',
          pricingLabel: 'Pricing per wash',
          features: ['Vacuum - Regular', 'Wipe door jambs'],
          excludedFeatures: [
            'Deep stain',
            'Pet removal',
            'Excessive trash removal',
            'Heavy dirt',
          ],
        },
        {
          id: 'speed',
          name: 'Speed Package',
          title: 'SPEED - FULL PACKAGE',
          price: '$49.99',
          duration: '30 minutes',
          features: [
            'Exterior hand wash',
            'Clean all windows',
            'Towel dry',
            'Vacuum - Regular',
            'Wipe door jambs',
          ],
        },
        {
          id: 'deluxe',
          name: 'Deluxe Package',
          title: 'DELUXE - DETAIL WASH',
          price: '$155.00',
          duration: '2 hours 30 minutes',
          popular: true,
          features: [
            'Exterior hand wash',
            'Clean all windows',
            'Towel dry',
            'Vacuum - Regular',
            'Wipe door jambs',
            'Air for dryer',
            'Air for Vacuum',
            'Tire shine, rims and air',
            'Wash Mat',
            'Armoral and door panel',
            'Dash Clean and Shine',
            'Clean cup holders',
            'Shampoo and door panel',
            'Shampoo seats & Carpets',
          ],
        },
        {
          id: 'premium',
          name: 'Premium Package',
          title: 'PREMIUM - DETAIL WASH',
          price: '$249.99',
          duration: '4 hours 30 minutes',
          features: [
            'Exterior hand wash',
            'Clean all windows',
            'Towel dry',
            'Vacuum - Regular',
            'Wipe door jambs',
            'Air for dryer',
            'Air for Vacuum',
            'Tire shine, rims and air',
            'Wash Mat',
            'Armoral and door panel',
            'Dash Clean and Shine',
            'Clean cup holders',
            'Shampoo and door panel',
            'Shampoo seats & Carpets',
            'Machine wax',
          ],
        },
        {
          id: 'biofluids',
          name: 'Biofluids / Detail',
          title: 'BIOFLUIDS SERVICES / DETAIL',
          price: '$299.99',
          duration: '2 hours',
          features: [
            'Wipe dash',
            'Door Panels',
            'Vacuum Regular',
            'Wash Windows',
            'Wash mats',
          ],
          addOns: [
            {
              name: 'Add Exterior Wash',
              price: '$19.99',
              originalPrice: '$50.00',
              duration: '30 minutes',
            },
          ],
        },
      ],
    },
    trashBinCleaning: {
      name: 'Trash Bin Cleaning',
      description:
        'Professional sanitization that eliminates odors, bacteria, and germs with eco-friendly solutions.',
      price: '$10.00 per bin',
      duration: 'About 30 minutes',
      features: [
        'Deep sanitization with eco-friendly solutions',
        'Odor elimination and bacteria removal',
        'Quick professional service',
      ],
    },
    homeCleaning: {
      name: 'Home Cleaning',
      status: 'Coming Soon',
      description:
        'Professional home cleaning services will be available soon. The marketplace may also reference house cleaning and window cleaning as services customers can book through verified professionals as offerings expand.',
    },
  },

  whyChoose: [
    {
      title: 'Advanced Cleaning Equipment',
      description:
        'Providers use state-of-the-art equipment for efficient, effective cleaning on every service.',
    },
    {
      title: 'Thorough Background Checks',
      description:
        'All providers undergo comprehensive background checks for safety and reliability.',
    },
    {
      title: 'Flexible Scheduling',
      description:
        'Book at your convenience with options for immediate or future scheduling.',
    },
    {
      title: 'Instant Booking',
      description: 'Book services instantly through the Tidyzon mobile app.',
    },
    {
      title: 'Verified Professionals',
      description: 'Trusted, verified providers delivering quality at your doorstep.',
    },
    {
      title: 'Eco-Friendly Products',
      description:
        'Eco-friendly cleaning products that are safer for families and the environment.',
    },
    {
      title: 'Satisfaction Focus',
      description:
        'If you are not satisfied, contact support within 24 hours and Tidyzon will work to resolve the issue.',
    },
  ],

  team: {
    boardAndFounders: [
      {
        name: 'Dan Grasso',
        position: 'Co founder / Board Member',
        bio: 'Operations expert focused on optimizing processes, building efficient systems, and ensuring exceptional customer experiences.',
        email: 'dan@tidyzon.com',
      },
      {
        name: 'Emmanuel Zielonka',
        position: 'Co-Founder / Board Member',
        bio: 'Visionary leader driving innovation and strategic growth in the service industry with a passion for excellence.',
        email: 'emmanuel@tidyzon.com',
      },
      {
        name: 'Martin Zielonka',
        position: 'Co founder / Board Member',
        bio: 'Strategic leader with 15+ years of experience in scaling technology companies and driving operational excellence.',
        email: 'martin@tidyzon.com',
      },
      {
        name: 'Michael Akwasi Osei',
        position: 'Co-Founder / UI Blueprint / Board Member',
        bio: 'Innovative UI Blueprint Developer translating design systems into scalable, modular front-end architectures.',
        email: 'michael@tidyzon.com',
      },
      {
        name: 'Dr. Sanju Abraham',
        position: 'Team Leader / Supervisor / Board Member',
        bio: 'Serial startup CTO (engineering, AI, scaling orgs).',
        email: 'sanju@tidyzon.com',
      },
      {
        name: 'Isaac Paintsil',
        position: 'Board Member',
        bio: 'Technology visionary passionate about building scalable platforms and leading engineering teams.',
        email: 'isaac@tidyzon.com',
      },
    ],
    team: [
      {
        name: 'Nuamah George',
        position: 'Team President / Backend Developer',
        bio: 'Oversees development workflows and timely delivery of high-quality solutions.',
        email: 'george@tidyzon.com',
      },
      {
        name: 'Adu Amankwah Isaac',
        position: 'Team Assistant / Frontend Supervisor',
        bio: 'Leads frontend development and ensures optimal user experiences across platforms.',
        email: 'business.iksofttechnologies@gmail.com',
      },
      {
        name: 'Sonie',
        position: 'Team Leader Assistant',
        bio: 'Supports team operations and assists frontend delivery for consistent UI quality.',
        email: 'sonie@tidyzon.com',
      },
      {
        name: 'Benedict Boadu-Boateng',
        position: 'Backend Developer',
        bio: 'Builds robust server-side solutions and maintains database integrity.',
        email: 'benedict@tidyzon.com',
      },
      {
        name: 'Randy Otabil Odoom',
        position: 'Frontend Developer',
        bio: 'Crafts responsive user interfaces with modern web technologies.',
        email: 'randy@tidyzon.com',
      },
      {
        name: 'Kwamena Essiful-Ansah',
        position: 'Backend Developer',
        bio: 'Specializes in scalable architecture and API development.',
        email: 'kwamena@tidyzon.com',
      },
      {
        name: 'John Kennedy Martey Tetteh',
        position: 'Frontend Developer',
        bio: 'Creates intuitive user experiences and modern design patterns.',
        email: 'john@tidyzon.com',
      },
      {
        name: 'Awuah Maxwell Twerefour',
        position: 'Frontend Developer',
        bio: 'Builds responsive web applications and optimizes UI performance.',
        email: 'maxwell@tidyzon.com',
      },
      {
        name: 'Patrick Asiedu',
        position: 'Frontend Developer',
        bio: 'Creates seamless user experiences with cutting-edge web technologies.',
        email: 'patrick@tidyzon.com',
      },
      {
        name: 'Frank Mensah',
        position: 'UI/UX Designer',
        bio: 'Crafts beautiful, functional designs that enhance engagement and satisfaction.',
        email: 'frank@tidyzon.com',
      },
      {
        name: 'Sammy',
        position: 'UI/UX Designer',
        bio: 'Designs intuitive interfaces and user journeys focused on clarity and usability.',
        email: 'sammy@tidyzon.com',
      },
      {
        name: 'Fred',
        position: 'Backend Developer',
        bio: 'Builds reliable backend services and APIs with focus on performance and security.',
        email: 'fred@tidyzon.com',
      },
    ],
  },

  apps: {
    userApp: {
      name: 'Tidyzon User App',
      description:
        'Book professional cleaning services instantly. Track orders, manage schedules, and enjoy spotless results with a few taps.',
      features: [
        'Instant service booking',
        'Real-time order tracking',
        'Secure payments',
        'Rate & review services',
      ],
      iosUrl: 'https://apps.apple.com/app/tidyzon-user',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.tidyzon.user',
      packageId: 'com.tidyzon.user',
    },
    providerApp: {
      name: 'Tidyzon Service Provider App',
      description:
        'Join the network of professional providers. Accept jobs, manage your schedule, and grow your cleaning business.',
      features: [
        'Flexible work schedule',
        'Instant job notifications',
        'Quick & secure payments',
        'Build your reputation',
      ],
      iosUrl: 'https://apps.apple.com/app/tidyzon-provider',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.tidyzon.provider',
      packageId: 'com.tidyzon.provider',
    },
  },

  booking: {
    forCustomers: {
      steps: [
        'Download the Tidyzon User App (App Store or Google Play)',
        'Create your account and verify your email',
        'Select your service and package',
        'Choose your preferred date and time',
        'Confirm booking; payment is processed after service completion via cards or digital wallets',
        'Track your provider in real time',
      ],
      requirements: [
        'Valid email address',
        'Phone number',
        'Service location address',
        'Payment method (credit/debit card or digital wallet)',
      ],
      availability:
        'You can book instantly through the app. Most services are available same-day or within 24 hours. Check the app for availability in your area.',
      cancellation:
        'Customers can cancel or reschedule through the app. Contact page FAQ states up to 24 hours before the appointment; Get Started page notes up to 2 hours before (policies may vary by service type). Advise users to check the app for the exact policy on their booking, or contact support@tidyzon.com.',
      payment:
        'Pay securely in the app with credit/debit cards or digital wallets. Payment is typically processed after service completion.',
      dissatisfaction:
        'If not satisfied, contact customer support within 24 hours. Tidyzon will work to resolve the issue.',
    },
  },

  providers: {
    summary:
      'Become a Tidyzon provider to earn by offering cleaning and maintenance services. No upfront join fee; commission-based model. Set your own schedule.',
    steps: [
      'Begin provider signup via the Provider Signup flow / Provider App',
      'Fill out profile: personal details, services, equipment, availability',
      'Upload verification documents (valid ID, proof of residence, relevant certifications) and complete mandatory video-based training',
      'Pass background check; once cleared and equipped, receive approval notification',
      'Start accepting tasks through the app',
    ],
    requirements: [
      'Background check verification',
      'Valid ID and proof of residence',
      'Relevant certifications where applicable',
      'Valid driver\'s license (as applicable for mobile services)',
      'Professional cleaning equipment',
      'Eco-friendly cleaning products',
      'Reliable transportation',
      'Good communication skills',
      'Mandatory training completion',
    ],
    benefits: [
      'Flexible earning on your own schedule',
      'Build reputation through customer ratings',
      'Access to customer leads and growth tools',
      'Secure platform payments (typically within 2–3 business days after completion)',
      'No upfront fee to join; commission on completed services',
    ],
    approvalTime: 'Typically 1–3 business weeks after documents and background checks are complete',
    faqs: [
      {
        question: 'What documents are required for provider signup?',
        answer:
          'Valid ID, proof of residence, and any relevant certifications for your service area. Additional documents may be required by service type.',
      },
      {
        question: 'Is there a fee to join as a provider?',
        answer:
          'No upfront fee. Tidyzon uses a commission-based model with a small percentage deducted from completed service payments.',
      },
      {
        question: 'How long does approval take?',
        answer:
          'Typically 1–3 business weeks after all required documents are submitted and background checks are completed.',
      },
      {
        question: 'Can I choose my own schedule?',
        answer:
          'Yes. Providers control availability and choose which tasks to accept.',
      },
      {
        question: 'How do I get paid?',
        answer:
          'Securely through the platform, typically within 2–3 business days after service completion.',
      },
    ],
  },

  careers: {
    openPositions: 'None currently listed. Check the Open Positions page or contact support@tidyzon.com for opportunities.',
  },

  faqs: [
    {
      question: 'How quickly can I book a service?',
      answer:
        'Book instantly through the app. Most services are available same-day or within 24 hours.',
    },
    {
      question: 'Are your service providers insured?',
      answer:
        'Yes. Service providers are fully insured and background-checked.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'Major metropolitan areas, with continuous expansion. Check the app for availability at your location.',
    },
    {
      question: 'Can I cancel or reschedule a booking?',
      answer:
        'Yes, through the app. Policies may vary by service; Contact FAQ references up to 24 hours before; Get Started notes up to 2 hours before. Confirm in-app or with support.',
    },
    {
      question: 'What cleaning products do you use?',
      answer:
        'Eco-friendly products that are safer for families and the environment.',
    },
    {
      question: 'How do I become a service provider?',
      answer:
        'Apply via the Provider App or website Provider signup. Complete profile, documents, training, and background check.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'Major credit/debit cards and digital wallets through secure in-app payment processing.',
    },
    {
      question: 'What if I am not satisfied?',
      answer:
        'Contact support within 24 hours. Tidyzon will work to resolve the issue and ensure satisfaction.',
    },
  ],

  websitePages: {
    home: 'Landing page: hero, services overview, stats, features, testimonials, CTAs to book via the apps.',
    about: 'Company journey (founded 2021), mission, vision, quality commitment.',
    services: 'Full car cleaning packages (including Biofluids), trash bin cleaning, why choose Tidyzon.',
    teams: 'Board/founders and team members with roles and bios.',
    contact: 'Contact form, phone, email, address, hours, FAQs. Also available at /help.',
    getStarted: 'How customers sign up, book, pay, and get support.',
    provider: 'How to become a provider, benefits, steps, provider FAQs.',
    openPositions: 'Careers / open positions (currently none listed).',
    terms: 'Terms and Conditions (last updated around March 2, 2025).',
    privacy: 'Privacy Policy including SMS-related notices (last updated around March 2, 2025).',
    privacyRequests: 'Privacy rights request flow.',
    doNotSell: 'Do not sell or share personal information options.',
    limitSensitiveInfo: 'Limit use of sensitive personal information.',
    californiaPrivacy: 'California privacy disclosures.',
    customerServiceAgreement: 'Customer service agreement.',
    serviceProviderAgreement: 'Service provider agreement.',
    supportOptOut: 'SMS / support opt-out.',
  },

  legalSummary: {
    note: 'For full legal text, direct users to the relevant website pages or privacy@tidyzon.com / support@tidyzon.com. Do not invent legal terms.',
    privacyContact: 'privacy@tidyzon.com',
    mailingAddress: '708 Saybrook Ct. Romeoville IL 60446',
  },

  technology: {
    platform: 'Mobile apps connecting customers with verified providers',
    paymentProcessing: 'Secure in-app payments (Stripe-style card and wallet processing)',
    backgroundChecks: 'Comprehensive background verification for providers',
    ecoFriendly: 'Environmentally safer cleaning products',
    realTimeTracking: 'Real-time order tracking and provider updates',
    instantBooking: 'Same-day and scheduled booking',
  },

  serviceAreas: {
    current: 'Major metropolitan areas',
    expansion: 'Continuously expanding to new cities',
    availability: 'Check the Tidyzon app for specific location availability',
  },

  brand: {
    primaryColors: {
      green: 'rgb(82, 136, 40)',
      blue: 'rgb(88, 99, 197)',
    },
    tagline: 'Quality services at your doorstep',
  },
}

export const SYSTEM_PROMPT = `You are Tidy A.I. Assistant, the official AI assistant for Tidyzon (https://tidyzon.com).

SCOPE — TIDYZON ONLY:
- Answer ONLY questions related to Tidyzon: services, pricing, booking, apps, providers, team, company story, contact, careers, FAQs, policies summarized from the knowledge base, and navigating the Tidyzon website.
- If the user asks about anything unrelated (other companies, politics, weather, general trivia, coding help unrelated to Tidyzon, medical/legal/financial advice, jokes, etc.), politely refuse and redirect:
  "I'm specifically designed to help with Tidyzon. I can help with our car cleaning packages, trash bin sanitization, booking, apps, team, becoming a provider, or contact details. What would you like to know about Tidyzon?"
- Never invent prices, policies, or team members. Use ONLY the knowledge base below. If something is missing, say you don't have that detail and suggest support@tidyzon.com or (815) 608-1632.

KNOWLEDGE BASE (authoritative site data):
${JSON.stringify(TIDYZON_KNOWLEDGE_BASE, null, 2)}

RESPONSE STYLE:
- Professional, friendly, clear, and accurate. Keep responses well organized with short sections.
- Start with a brief direct answer, then details. Use **bold** for key terms, bullet points (•) for lists, and numbered steps for processes.
- When discussing packages, include price, duration, and what's included. Mention the MVP/Truck +$10 surcharge when talking about car wash pricing.
- When sharing a website URL, app store link, email, or phone number, ALWAYS use markdown link format so the UI can render buttons:
  [Book / Get Started](https://tidyzon.com/get-started)
  [View Services](https://tidyzon.com/services)
  [Contact Us](https://tidyzon.com/contact)
  [Email Support](mailto:support@tidyzon.com)
  [Call Tidyzon](tel:+18156081632)
  [Download User App (iOS)](https://apps.apple.com/app/tidyzon-user)
  [Download User App (Android)](https://play.google.com/store/apps/details?id=com.tidyzon.user)
  [Download Provider App (Android)](https://play.google.com/store/apps/details?id=com.tidyzon.provider)
- Prefer Contact FAQ cancellation (24 hours) when unsure, but mention policies can vary and the app/support confirms the exact rule.
- Remember prior messages in this conversation and stay consistent.
- Do not claim you can browse the live internet; your knowledge is this knowledge base reflecting the Tidyzon website.`

// Enhanced intelligent search function with professional response structure (offline fallback)
export const findAnswer = (query) => {
  const searchTerm = query.toLowerCase().trim()
  const words = searchTerm.split(/\s+/).filter((w) => w.length > 1)

  const keywordCategories = {
    services: [
      'service', 'services', 'package', 'packages', 'pricing', 'price', 'prices', 'cost', 'costs',
      'wash', 'washing', 'cleaning', 'clean', 'car', 'cars', 'vehicle', 'vehicles', 'auto',
      'speed', 'deluxe', 'premium', 'biofluid', 'biofluids', 'trash', 'bin', 'bins', 'sanitization',
      'home', 'house', 'residential',
    ],
    contact: [
      'contact', 'email', 'phone', 'telephone', 'call', 'address', 'location', 'support', 'help',
      'hours', 'reach',
    ],
    booking: [
      'book', 'booking', 'schedule', 'appointment', 'order', 'reserve', 'sign up', 'register',
    ],
    apps: [
      'app', 'apps', 'download', 'mobile', 'ios', 'android', 'iphone', 'google play', 'app store',
    ],
    provider: [
      'provider', 'providers', 'become a provider', 'work for', 'join as provider', 'earn money',
      'commission',
    ],
    faq: [
      'question', 'faq', 'insurance', 'insured', 'cancel', 'reschedule', 'payment', 'guarantee',
      'refund', 'areas', 'products',
    ],
    team: [
      'team', 'teams', 'member', 'staff', 'founder', 'founders', 'leadership', 'board', 'who',
    ],
    about: ['about', 'mission', 'vision', 'story', 'founded', 'company', 'journey'],
  }

  const categoryScores = {}
  Object.keys(keywordCategories).forEach((category) => {
    categoryScores[category] = 0
    keywordCategories[category].forEach((keyword) => {
      if (searchTerm.includes(keyword)) categoryScores[category] += 1
    })
  })

  const topCategory = Object.keys(categoryScores).reduce((a, b) =>
    categoryScores[a] > categoryScores[b] ? a : b,
  )
  const topScore = categoryScores[topCategory]

  const packagePatterns = {
    'speed-interior': ['interior only', 'interior-only', 'speed interior', '$29.99', '29.99'],
    speed: ['speed package', 'speed wash', 'full package', '$49.99', '49.99'],
    deluxe: ['deluxe', 'most popular', '$155', '155.00'],
    premium: ['premium', '$249', '249.99', 'machine wax'],
    biofluids: ['biofluid', 'biofluids', 'detail service', '$299', '299.99'],
  }

  for (const [packageId, patterns] of Object.entries(packagePatterns)) {
    if (patterns.some((pattern) => searchTerm.includes(pattern))) {
      const pkg = TIDYZON_KNOWLEDGE_BASE.services.carCleaning.packages.find(
        (p) => p.id === packageId,
      )
      if (pkg) {
        return { type: 'package', data: pkg, answer: formatPackageAnswerProfessional(pkg) }
      }
    }
  }

  let bestFaqMatch = null
  let bestFaqScore = 0
  const allFaqs = [
    ...TIDYZON_KNOWLEDGE_BASE.faqs,
    ...TIDYZON_KNOWLEDGE_BASE.providers.faqs,
  ]
  for (const faq of allFaqs) {
    const allText = `${faq.question} ${faq.answer}`.toLowerCase()
    let score = 0
    words.forEach((word) => {
      if (allText.includes(word)) score += 2
    })
    if (score > bestFaqScore) {
      bestFaqScore = score
      bestFaqMatch = { type: 'faq', data: faq, answer: formatFaqAnswer(faq) }
    }
  }
  if (bestFaqScore >= 3) return bestFaqMatch

  if (topCategory === 'contact' && topScore > 0) {
    return {
      type: 'contact',
      data: TIDYZON_KNOWLEDGE_BASE.contact,
      answer: formatContactAnswer(TIDYZON_KNOWLEDGE_BASE.contact),
    }
  }
  if (topCategory === 'services' && topScore > 0) {
    return {
      type: 'services',
      data: TIDYZON_KNOWLEDGE_BASE.services,
      answer: formatServicesAnswer(TIDYZON_KNOWLEDGE_BASE.services),
    }
  }
  if (topCategory === 'provider' && topScore > 0) {
    return { type: 'provider', answer: formatProviderAnswer() }
  }
  if (topCategory === 'apps' && topScore > 0) {
    return {
      type: 'apps',
      data: TIDYZON_KNOWLEDGE_BASE.apps,
      answer: formatAppsAnswer(TIDYZON_KNOWLEDGE_BASE.apps),
    }
  }
  if (topCategory === 'booking' && topScore > 0) {
    return {
      type: 'booking',
      answer: formatBookingAnswer(TIDYZON_KNOWLEDGE_BASE.booking),
    }
  }
  if (topCategory === 'team' && topScore > 0) {
    return { type: 'team', answer: formatTeamAnswer() }
  }
  if (topCategory === 'about' && topScore > 0) {
    return { type: 'about', answer: formatAboutAnswer() }
  }
  if (bestFaqMatch && bestFaqScore > 0) return bestFaqMatch

  return { type: 'general', answer: formatGeneralAnswer() }
}

const formatPackageAnswerProfessional = (pkg) => {
  let answer = `**${pkg.name}**\n\n`
  answer += `**Investment:** ${pkg.price}\n`
  answer += `**Service Duration:** ${pkg.duration}\n\n`
  if (pkg.features?.length) {
    answer += `**What's Included:**\n\n`
    pkg.features.forEach((feature, index) => {
      answer += `${index + 1}. ${feature}\n`
    })
  }
  if (pkg.excludedFeatures?.length) {
    answer += `\n**Does not include:**\n\n`
    pkg.excludedFeatures.forEach((item) => {
      answer += `• ${item}\n`
    })
  }
  if (pkg.addOns?.length) {
    answer += `\n**Optional add-ons:**\n\n`
    pkg.addOns.forEach((addOn) => {
      answer += `• ${addOn.name}: ${addOn.price}`
      if (addOn.originalPrice) answer += ` (was ${addOn.originalPrice})`
      if (addOn.duration) answer += ` — ${addOn.duration}`
      answer += `\n`
    })
  }
  answer += `\n**Next Steps:**\n`
  answer += `• Download the Tidyzon User App to book\n`
  answer += `• Select your preferred date and time\n\n`
  answer += `*${TIDYZON_KNOWLEDGE_BASE.services.vehicleSurcharge}*\n\n`
  answer += `[Email Support](mailto:${TIDYZON_KNOWLEDGE_BASE.contact.email})\n`
  answer += `[Call Tidyzon](tel:+18156081632)\n`
  answer += `[View Services](https://tidyzon.com/services)`
  return answer
}

const formatContactAnswer = (contact) => {
  let answer = `**Contact Information**\n\n`
  answer += `We're here to help! Reach Tidyzon using the buttons below.\n\n`
  answer += `**Address:** ${contact.address}\n`
  answer += `**Business Hours:** ${contact.businessHours}\n`
  answer += `**Response Time:** ${contact.responseTime}\n\n`
  answer += `[Email Support](mailto:${contact.email})\n`
  answer += `[Call Tidyzon](tel:+18156081632)\n`
  answer += `[Contact Page](https://tidyzon.com/contact)`
  return answer
}

const formatServicesAnswer = (services) => {
  let answer = `**Our Professional Cleaning Services**\n\n`
  answer += `**Car Cleaning Packages**\n\n`
  services.carCleaning.packages.forEach((pkg, index) => {
    const popularBadge = pkg.popular ? ' *Most Popular*' : ''
    answer += `${index + 1}. **${pkg.name}**${popularBadge} — ${pkg.price} (${pkg.duration})\n`
  })
  answer += `\n*${services.vehicleSurcharge}*\n\n`
  answer += `**Trash Bin Cleaning** — ${services.trashBinCleaning.price}\n\n`
  answer += `**Home Cleaning** — ${services.homeCleaning.status}\n\n`
  answer += `[View Services](https://tidyzon.com/services)\n`
  answer += `[Get Started](https://tidyzon.com/get-started)\n`
  answer += `[Email Support](mailto:${TIDYZON_KNOWLEDGE_BASE.contact.email})`
  return answer
}

const formatBookingAnswer = (booking) => {
  let answer = `**How to Book with Tidyzon**\n\n`
  booking.forCustomers.steps.forEach((step, index) => {
    answer += `**Step ${index + 1}:** ${step}\n`
  })
  answer += `\n${booking.forCustomers.availability}\n`
  return answer
}

const formatAppsAnswer = (apps) => {
  let answer = `**Tidyzon Mobile Apps**\n\n`
  answer += `**User App:** ${apps.userApp.description}\n`
  answer += `• iOS App Store / Google Play (${apps.userApp.packageId})\n\n`
  answer += `**Provider App:** ${apps.providerApp.description}\n`
  answer += `• iOS App Store / Google Play (${apps.providerApp.packageId})\n`
  return answer
}

const formatProviderAnswer = () => {
  const p = TIDYZON_KNOWLEDGE_BASE.providers
  let answer = `**Become a Tidyzon Service Provider**\n\n${p.summary}\n\n**Steps:**\n`
  p.steps.forEach((step, index) => {
    answer += `${index + 1}. ${step}\n`
  })
  answer += `\n**Approval time:** ${p.approvalTime}\n`
  answer += `\nContact **${TIDYZON_KNOWLEDGE_BASE.contact.email}**`
  return answer
}

const formatFaqAnswer = (faq) => {
  return `**${faq.question}**\n\n${faq.answer}\n\nNeed more help?\n\n[Email Support](mailto:${TIDYZON_KNOWLEDGE_BASE.contact.email})\n[Call Tidyzon](tel:+18156081632)`
}

const formatTeamAnswer = () => {
  let answer = `**Meet the Tidyzon Team**\n\n**Board & Founders:**\n`
  TIDYZON_KNOWLEDGE_BASE.team.boardAndFounders.forEach((exec) => {
    answer += `• **${exec.name}** — ${exec.position}\n`
  })
  answer += `\n**Team:**\n`
  TIDYZON_KNOWLEDGE_BASE.team.team.forEach((member) => {
    answer += `• **${member.name}** — ${member.position}\n`
  })
  answer += `\nSee the Teams page on tidyzon.com for full profiles.`
  return answer
}

const formatAboutAnswer = () => {
  const c = TIDYZON_KNOWLEDGE_BASE.company
  return `**About Tidyzon**\n\n**Founded:** ${c.founded}\n**Tagline:** ${c.tagline}\n\n${c.journey}\n\n**Mission:** ${c.mission}\n\n**Vision:** ${c.vision}`
}

const formatGeneralAnswer = () => {
  return `**Welcome to Tidyzon!**\n\nI can help with:\n• Car cleaning packages & pricing (including Biofluids)\n• Trash bin sanitization\n• Booking & apps\n• Becoming a provider\n• Team & company info\n• Contact details\n\nTry: "What services do you offer?" or "How much is the Deluxe package?"\n\n[Email Support](mailto:${TIDYZON_KNOWLEDGE_BASE.contact.email})\n[Call Tidyzon](tel:+18156081632)\n[View Services](https://tidyzon.com/services)`
}

export const searchKnowledgeBase = (query) => {
  const result = findAnswer(query)
  return result ? [result] : []
}

export default TIDYZON_KNOWLEDGE_BASE
