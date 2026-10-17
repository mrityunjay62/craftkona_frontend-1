import { Link } from 'react-router-dom';
import { useState } from 'react';
import InquiryModal from './InquiryModal';

const Banner = () => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/public/images/beige_texture.jpg"
          alt="Kids Clothing Background"
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Kids Wear
              <span className="block text-amber-400">Wholesale Supplier</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Leading B2B supplier of high-quality children's clothing. 
              Competitive wholesale pricing for bulk orders with assured quality.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog" className="btn-primary text-lg px-8 py-4 inline-block text-center">
                View Catalog
              </Link>
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="btn-secondary text-lg px-8 py-4"
              >
                Request Quote
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-sm">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-sm">500+ Retail Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-sm">Quality Assurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
      />
    </div>
  );
};

export default Banner;