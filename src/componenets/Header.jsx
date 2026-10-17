import { IoSearchSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
              R/D
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-slate-900">Rajeev Dresses</h1>
              <p className="text-xs text-gray-600">Pvt. Ltd.</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search kids clothing..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-amber-500 transition-colors">
              <IoCart className="text-xl" />
              <span className="hidden sm:inline text-sm font-medium">Inquiry</span>
            </button>
            <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors">
              <FaWhatsapp className="text-xl" />
              <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
            </button>
            <Link 
              to="/admin/login" 
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
