import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col min-h-full">
      {/* Top bar: Logo + Sign In */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold italic text-orange-600">Chuks Kitchen</h1>
        <Link
          to="/signin"
          className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition"
        >
          Sign In
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Your Authentic Taste of Nigeria
        </h2>
        <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
          Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Freshly Prepared</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Support Local Business</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l4-2 4 2zM13 6h5a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 10h2" /></svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Fast &amp; Reliable Delivery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/signup"
            className="w-full sm:w-auto text-center bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition text-base"
          >
            Start Your Order
          </Link>
          <a
            href="#"
            className="w-full sm:w-auto text-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition text-base"
          >
            Learn More About Us
          </a>
        </div>
      </div>

      {/* Mini Footer */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
        &copy; 2024 Chuks Kitchen. &nbsp;
        <a href="#" className="hover:text-gray-600 transition">Privacy Policy</a>
        {' | '}
        <a href="#" className="hover:text-gray-600 transition">Terms of Service</a>
      </div>
    </div>
  );
};

export default Welcome;
