const SmallBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="relative h-80 md:h-96">
            <img
              src="/public/images/pink_texture.jpg"
              alt="Bulk Order Background"
              className="w-full h-full object-cover transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Stock Premium Kids Wear?
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join 500+ retailers who trust Rajeev Dresses for quality kids clothing. 
                Special discounts available for bulk orders above 100 pieces.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Best Prices</h3>
                  <p className="text-gray-300 text-sm">Competitive wholesale rates</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Quality Assured</h3>
                  <p className="text-gray-300 text-sm">Premium fabric & stitching</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">Fast Delivery</h3>
                  <p className="text-gray-300 text-sm">Quick shipping across India</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-secondary text-lg px-8 py-4">
                  Request Bulk Quote
                </button>
                <button className="bg-white text-slate-900 text-lg px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallBanner;