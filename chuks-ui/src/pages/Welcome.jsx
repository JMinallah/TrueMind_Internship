import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="text-center md:text-left">
      {/* Brand */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Welcome to <span className="text-orange-600">Chuks Eats</span>
      </h1>
      <p className="text-gray-500 mb-8 text-sm sm:text-base leading-relaxed">
        Delicious meals, fresh ingredients, bold flavours — all delivered to your doorstep.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/signin"
          className="w-full sm:w-auto text-center bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="w-full sm:w-auto text-center border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
