import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productData, featuredBrands } from '../data/products';
import InquiryModal from './InquiryModal';

const FeaturedBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  
  // Safe check - if no data, show fallback
  if (!productData || !Array.isArray(productData)) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Featured Brands</h2>
          <p className="text-center text-gray-500">No products available</p>
        </div>
      </section>
    );
  }

  // Filter products by featured brands and selected brand
  const featuredProducts = productData?.filter(product => 
    featuredBrands?.includes(product?.brand) && 
    (selectedBrand === 'all' || product?.brand === selectedBrand)
  ) || [];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Brands</h2>
          <p className="text-gray-600">Discover our premium brand collections</p>
        </div>

        {/* Brand Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button 
            onClick={() => setSelectedBrand('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedBrand === 'all' 
                ? 'bg-amber-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Brands
          </button>
          {featuredBrands?.map((brand, index) => (
            <button 
              key={brand || index}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedBrand === brand 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {brand || `Brand ${index + 1}`}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {featuredProducts?.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No featured products available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts?.map((product) => (
              <div
                key={product?.id || Math.random()}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={product?.img || '/public/images/logo.png'}
                    alt={product?.name || 'Product'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {product?.brand || 'Brand'}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">{product?.category || 'N/A'}</span>
                    <h3 className="text-lg font-semibold text-slate-900 mt-1">
                      {product?.name || 'Product Name'}
                    </h3>
                  </div>

                  {/* MOQ and Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-600">Min. Order Qty</p>
                      <p className="text-sm font-semibold text-slate-900">{product?.moq || 'N/A'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600">Price</p>
                      <p className="text-sm font-semibold text-amber-500">
                        {product?.price || 'On Request'}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => {
                      setSelectedProduct(product?.name || 'Product');
                      setShowInquiryModal(true);
                    }}
                    className="w-full bg-slate-900 text-white py-2 px-3 rounded text-sm font-medium hover:bg-slate-800 transition-colors"
                  >
                    Add to Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link 
            to="/catalog"
            className="btn-primary inline-block"
          >
            View All Brands
          </Link>
        </div>
      </div>
      
      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
        productName={selectedProduct}
      />
    </section>
  );
};

export default FeaturedBrands;
