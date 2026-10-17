import React, { useState } from 'react';
import { productData, featuredBrands } from '../data/products';
import InquiryModal from '../componenets/InquiryModal';

const Catalog = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedTab, setSelectedTab] = useState('brand');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  
  // Safe check - use imported data or fallback
  const catalogProducts = productData?.length > 0 ? productData : [
    {
      id: 1,
      name: "Cotton Baby Romper",
      category: "0-12 months",
      moq: "10 pcs",
      price: "On Request",
      img: "/public/images/bowl-1.png",
      brand: "MiniStyle",
      trend: "Bestseller",
      offer: "20% OFF"
    },
    {
      id: 2,
      name: "Kids Party Dress",
      category: "2-4 years",
      moq: "8 pcs",
      price: "On Request",
      img: "/public/images/img-1.jpeg",
      brand: "TinyTrends",
      trend: "New Arrival",
      offer: "15% OFF"
    },
    {
      id: 3,
      name: "School Uniform Set",
      category: "5-8 years",
      moq: "20 pcs",
      price: "On Request",
      img: "/public/images/Card.png",
      brand: "MiniStyle",
      trend: "Classic",
      offer: "10% OFF"
    },
    {
      id: 4,
      name: "Ethnic Wear Collection",
      category: "3-10 years",
      moq: "12 pcs",
      price: "On Request",
      img: "/public/images/texture.png",
      brand: "TinyTrends",
      trend: "Trending",
      offer: "25% OFF"
    },
    {
      id: 5,
      name: "Summer Casual Wear",
      category: "1-6 years",
      moq: "15 pcs",
      price: "On Request",
      img: "/public/images/pink_texture.jpg",
      brand: "MiniStyle",
      trend: "Seasonal",
      offer: "30% OFF"
    },
    {
      id: 6,
      name: "Winter Collection",
      category: "2-8 years",
      moq: "10 pcs",
      price: "On Request",
      img: "/public/images/beige_texture.jpg",
      brand: "TinyTrends",
      trend: "Premium",
      offer: "No Offer"
    },
    {
      id: 7,
      name: "Festive Wear",
      category: "3-12 years",
      moq: "8 pcs",
      price: "On Request",
      img: "/public/images/star.jpg",
      brand: "MiniStyle",
      trend: "Limited Edition",
      offer: "40% OFF"
    },
    {
      id: 8,
      name: "Sports Wear",
      category: "4-10 years",
      moq: "12 pcs",
      price: "On Request",
      img: "/public/images/logo.png",
      brand: "TinyTrends",
      trend: "Active",
      offer: "20% OFF"
    }
  ];

  // Get unique values for each tab
  const brands = ['all', ...new Set(catalogProducts?.map(p => p?.brand).filter(Boolean))];
  const trends = ['all', ...new Set(catalogProducts?.map(p => p?.trend).filter(Boolean))];
  const offers = ['all', ...new Set(catalogProducts?.map(p => p?.offer).filter(Boolean))];

  // Safe filtering logic based on selected tab
  const filteredProducts = selectedTab === 'brand' 
    ? selectedBrand === 'all' 
      ? catalogProducts 
      : catalogProducts?.filter(product => product?.brand === selectedBrand) || []
    : selectedTab === 'trend'
      ? selectedBrand === 'all'
        ? catalogProducts
        : catalogProducts?.filter(product => product?.trend === selectedBrand) || []
      : selectedTab === 'offer'
        ? selectedBrand === 'all'
          ? catalogProducts
          : catalogProducts?.filter(product => product?.offer === selectedBrand) || []
        : catalogProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-slate-900">Product Catalog</h1>
          <p className="text-gray-600 mt-2">Browse our complete collection of premium kids clothing</p>
        </div>
      </div>

      {/* Tab Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex space-x-1 border-b border-gray-200">
            <button
              onClick={() => {
                setSelectedTab('brand');
                setSelectedBrand('all');
              }}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'brand'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Brand Name
            </button>
            <button
              onClick={() => {
                setSelectedTab('trend');
                setSelectedBrand('all');
              }}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'trend'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Trend Name
            </button>
            <button
              onClick={() => {
                setSelectedTab('offer');
                setSelectedBrand('all');
              }}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                selectedTab === 'offer'
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Offer Name
            </button>
          </div>

          {/* Filter Options */}
          <div className="py-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBrand('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedBrand === 'all' 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All {selectedTab === 'brand' ? 'Brands' : selectedTab === 'trend' ? 'Trends' : 'Offers'}
              </button>
              {(selectedTab === 'brand' ? brands : selectedTab === 'trend' ? trends : offers)?.slice(1).map((item) => (
                <button
                  key={item || 'unknown'}
                  onClick={() => setSelectedBrand(item)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedBrand === item 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {item || 'Unknown'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {selectedBrand === 'all' ? 'No products available' : `No products available for ${selectedBrand}`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts?.map((product) => (
              <div
                key={product?.id || Math.random()}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={product?.img || '/public/images/logo.png'}
                    alt={product?.name || 'Product'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Wholesale
                    </span>
                    {selectedTab === 'brand' && product?.brand && (
                      <span className="bg-slate-900 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {product.brand}
                      </span>
                    )}
                    {selectedTab === 'trend' && product?.trend && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {product.trend}
                      </span>
                    )}
                    {selectedTab === 'offer' && product?.offer && product?.offer !== 'No Offer' && (
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {product.offer}
                      </span>
                    )}
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

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        setSelectedProduct(product?.name || 'Product');
                        setShowInquiryModal(true);
                      }}
                      className="flex-1 bg-slate-900 text-white py-2 px-3 rounded text-sm font-medium hover:bg-slate-800 transition-colors"
                    >
                      Add to Inquiry
                    </button>
                    <button 
                      onClick={() => alert(`Viewing details for ${product?.name || 'Product'}`)}
                      className="flex-1 border border-slate-900 text-slate-900 py-2 px-3 rounded text-sm font-medium hover:bg-slate-50 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Place Bulk Order?</h2>
          <p className="text-gray-300 mb-6">Get special discounts on orders above 100 pieces</p>
          <button 
            onClick={() => {
              setSelectedProduct('Bulk Order Inquiry');
              setShowInquiryModal(true);
            }}
            className="btn-secondary"
          >
            Request Bulk Quote
          </button>
        </div>
      </div>
      
      {/* Inquiry Modal */}
      <InquiryModal 
        isOpen={showInquiryModal}
        onClose={() => setShowInquiryModal(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default Catalog;
