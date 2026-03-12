import React from 'react'

const Welcome = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-accent-green mb-8">
            Welcome to Tidyzon
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-gray leading-relaxed">
              Tidyzon is dedicated to revolutionizing the way you manage home services. Our mission is to provide 
              unparalleled convenience and quality by connecting you with trusted service providers in your area. 
              We envision a world where home maintenance is hassle-free, allowing you to focus on what truly matters.
            </p>
            <p className="text-lg text-gray leading-relaxed">
              With a commitment to excellence and a passion for innovation, Tidyzon is your go-to platform for 
              all your home service needs. Experience the difference that quality service makes.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-lg text-gray leading-relaxed">
              Founded with the belief that quality service should be accessible to everyone, Tidyzon has grown 
              into a trusted name in home maintenance. Our vision is to create a seamless experience for consumers 
              and providers alike, ensuring that every task is handled with care and professionalism.
            </p>
            <p className="text-lg text-gray leading-relaxed">
              Join us on our journey to redefine home services and experience the Tidyzon difference. We're here 
              to make your life easier, one service at a time.
            </p>
          </div>
        </div>

        {/* Service Provider Image */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Professional Tidyzon service provider"
              className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg border-4 border-white"
            />
            <div className="mt-6">
              <button className="btn btn-primary btn-lg">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome

