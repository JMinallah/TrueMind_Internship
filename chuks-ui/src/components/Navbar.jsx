const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <a href="/" className="text-2xl font-bold text-orange-600">
            Chuks Eats
          </a>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-orange-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">Menu</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">About</a></li>
            <li><a href="#" className="hover:text-orange-600 transition">Contact</a></li>
          </ul>

          {/* CTA */}
          <a
            href="#"
            className="hidden md:inline-block bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition"
          >
            Order Now
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
