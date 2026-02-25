import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area — no Navbar */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left — Image placeholder */}
        <div className="hidden md:flex md:w-1/2 bg-orange-50 items-center justify-center">
          <div className="text-center p-10">
            <div className="w-64 h-64 mx-auto bg-orange-200 rounded-2xl flex items-center justify-center">
              <span className="text-orange-500 text-sm font-medium">Your image here</span>
            </div>
            <p className="mt-6 text-gray-500 text-sm">Replace with your brand image</p>
          </div>
        </div>

        {/* Right — Page content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuthLayout;
