import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [
    {
      img: "/public/images/bowl-1.png",
      name: "Baby Wear",
      description: "0-2 years"
    },
    {
      img: "/public/images/img-1.jpeg",
      name: "Kids Wear",
      description: "2-8 years"
    },
    {
      img: "/public/images/Card.png",
      name: "School Uniforms",
      description: "All sizes"
    },
    {
      img: "/public/images/texture.png",
      name: "Ethnic Wear",
      description: "Traditional"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Shop by Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality kids clothing for every age group and occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <button 
                  onClick={() => alert(`Exploring ${category.name} collection...`)}
                  className="text-amber-500 font-medium hover:text-amber-600 transition-colors"
                >
                  Explore Collection &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/categories" className="btn-primary inline-block">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
