const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Chuks Eats</h3>
            <p className="text-sm leading-relaxed">
              Delicious meals made with love. Fresh ingredients, bold flavours, delivered to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Menu</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">About</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Food Street, Lagos</li>
              <li>hello@chukseats.com</li>
              <li>+234 800 000 0000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Chuks Eats. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
