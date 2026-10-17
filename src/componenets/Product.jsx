

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import InquiryModal from './InquiryModal';

const Product = () => {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const products = [
    {
      id: 1,
      name: "Cotton Baby Romper",
      category: "0-12 months",
      moq: "10 pcs",
      img: "/public/images/bowl-1.png",
    },
    {
      id: 2,
      name: "Kids Party Dress",
      category: "2-4 years",
      moq: "8 pcs",
      img: "/public/images/img-1.jpeg",
    },
    {
      id: 3,
      name: "School Uniform Set",
      category: "5-8 years",
      moq: "20 pcs",
      img: "/public/images/Card.png",
    },
    {
      id: 4,
      name: "Ethnic Wear Collection",
      category: "3-10 years",
      moq: "12 pcs",
      img: "/public/images/texture.png",
    },
    {
      id: 5,
      name: "Summer Casual Wear",
      category: "1-6 years",
      moq: "15 pcs",
      img: "/public/images/pink_texture.jpg",
    },
    {
      id: 6,
      name: "Winter Collection",
      category: "2-8 years",
      moq: "10 pcs",
      img: "/public/images/beige_texture.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality kids clothing available for wholesale orders
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Wholesale
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-1">
                    {product.name}
                  </h3>
                </div>

                {/* MOQ and Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Min. Order Qty</p>
                    <p className="text-lg font-semibold text-slate-900">{product.moq}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-lg font-semibold text-amber-500">
                      On Request
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setSelectedProduct(product.name);
                      setShowInquiryModal(true);
                    }}
                    className="flex-1 bg-slate-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                  >
                    Add to Inquiry
                  </button>
                  <button 
                    onClick={() => alert(`Viewing details for ${product.name}`)}
                    className="flex-1 border border-slate-900 text-slate-900 py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/catalog" className="btn-primary inline-block">
            View Complete Catalog
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

export default Product;
