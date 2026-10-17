const OurStory = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              About Rajeev Dresses Pvt. Ltd.
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              With over 10 years of excellence in the kids clothing industry, 
              we have established ourselves as a trusted wholesale partner for retailers across India.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to quality, competitive pricing, and timely delivery has made us 
              the preferred choice for over 500 retail partners. We specialize in premium 
              kids wear that combines comfort, durability, and contemporary designs.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Premium fabrics & strict quality control</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Best Prices</h4>
                  <p className="text-sm text-gray-600">Competitive wholesale rates</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Quick shipping across India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Customer Support</h4>
                  <p className="text-sm text-gray-600">Dedicated B2B assistance</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/public/images/star.jpg"
                alt="About Rajeev Dresses"
                className="w-full h-full object-cover transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                <div className="text-center px-2">
                  <div className="text-2xl font-bold text-slate-900">10+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center px-2">
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
                <div className="text-center px-2">
                  <div className="text-2xl font-bold text-slate-900">1000+</div>
                  <div className="text-sm text-gray-600">Designs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;