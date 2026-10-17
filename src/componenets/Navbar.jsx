import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-3 space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium hover:text-amber-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/catalog" 
            className="text-sm font-medium hover:text-amber-400 transition-colors duration-200"
          >
            Catalog
          </Link>
          <Link 
            to="/categories" 
            className="text-sm font-medium hover:text-amber-400 transition-colors duration-200"
          >
            Categories
          </Link>
          <Link 
            to="/bulk-order" 
            className="text-sm font-medium hover:text-amber-400 transition-colors duration-200"
          >
            Bulk Order
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium hover:text-amber-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;