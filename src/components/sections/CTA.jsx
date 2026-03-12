import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Modern home with Tidyzon service vehicle"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                🏠 Quality Service at Your Doorstep
              </span>
            </div>
          </div>
        </div>

        {/* CTA Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-accent-green mb-8">
              Join Tidyzon Today
            </h2>
          </div>

          {/* Right Column - Description and Button */}
          <div className="text-center lg:text-left space-y-6">
            <p className="text-xl text-dark-gray leading-relaxed">
              Experience Quality Service at Your Doorstep
            </p>
            <p className="text-lg text-gray leading-relaxed">
              Don't wait another day to experience the convenience of professional home services. 
              Join thousands of satisfied customers and transform how you manage your home maintenance needs.
            </p>
            <div className="pt-4">
              <button className="btn btn-primary btn-lg">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-dark-gray">Quick Signup</h3>
            <p className="text-gray">Get started in minutes with our simple registration process</p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-dark-gray">Book Services</h3>
            <p className="text-gray">Schedule your services with just a few taps on your phone</p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-dark-gray">Enjoy Results</h3>
            <p className="text-gray">Sit back and relax while our professionals handle everything</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

