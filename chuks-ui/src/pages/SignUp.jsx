import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock — just navigate to home, replace with real API call later
    navigate('/home');
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
      <p className="text-gray-500 text-sm mb-8">
        Join <span className="text-orange-600 font-medium">Chuks Eats</span> and start ordering today.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{' '}
        <Link to="/signin" className="text-orange-600 font-medium hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
