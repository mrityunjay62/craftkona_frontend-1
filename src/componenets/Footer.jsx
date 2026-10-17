const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                R/D
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold">Rajeev Dresses</h3>
                <p className="text-sm text-gray-400">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading wholesale supplier of premium kids clothing. 
              Serving 500+ retailers across India with quality assurance.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <span className="text-xs">ig</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                <span className="text-xs">tw</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Catalog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Become a Partner</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Baby Wear (0-2 yrs)</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Kids Wear (2-8 yrs)</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">School Uniforms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Ethnic Wear</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Seasonal Collection</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Corporate Office</p>
                <p className="text-gray-400">123 Business Park, Mumbai, Maharashtra 400001</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Phone</p>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Email</p>
                <p className="text-gray-400">info@rajeevdresses.com</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">WhatsApp</p>
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-amber-400">10+</div>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">500+</div>
              <p className="text-sm text-gray-400">Retail Partners</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">1000+</div>
              <p className="text-sm text-gray-400">Product Designs</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">4.8/5</div>
              <p className="text-sm text-gray-400">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              2024 Rajeev Dresses Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Shipping Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;