import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Baby Wear",
      description: "0-2 years",
      productCount: 45,
      img: "/public/images/bowl-1.png",
    },
    {
      id: 2,
      name: "Kids Wear",
      description: "2-8 years",
      productCount: 68,
      img: "/public/images/img-1.jpeg",
    },
    {
      id: 3,
      name: "School Uniforms",
      description: "All sizes",
      productCount: 32,
      img: "/public/images/Card.png",
    },
    {
      id: 4,
      name: "Ethnic Wear",
      description: "Traditional",
      productCount: 28,
      img: "/public/images/texture.png",
    },
    {
      id: 5,
      name: "Party Wear",
      description: "Special occasions",
      productCount: 24,
      img: "/public/images/pink_texture.jpg",
    },
    {
      id: 6,
      name: "Casual Wear",
      description: "Daily use",
      productCount: 56,
      img: "/public/images/beige_texture.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-slate-900">Shop by Categories</h1>
          <p className="text-gray-600 mt-2">Find the perfect clothing for every age and occasion</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No categories available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/catalog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-slate-900">{category.productCount} items</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-amber-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center text-amber-500 font-medium text-sm group-hover:text-amber-600 transition-colors">
                    Explore Collection
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-amber-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6">We offer custom designs and bulk manufacturing solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contact Our Team
            </button>
            <button className="btn-secondary">
              Download Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
