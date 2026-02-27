import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/home' },
    { label: 'Explore', href: '/explore' },
    { label: 'My Orders', href: '/orders' },
    { label: 'Account', href: '/account' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="/" className="text-2xl font-bold text-orange-600">
            Chuks Eats
          </a>

          {/* Nav Links */}
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium transition ${
                isActive(item.href) ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Login button */}
          <a
            href="/signin"
            className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition"
          >
            Login
          </a>
        </div>

        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-orange-600">
            Chuks Eats
          </a>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-6 py-4 space-y-3 font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block transition ${
                    isActive(item.href) ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-4">
            <a
              href="/signin"
              className="block text-center bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
