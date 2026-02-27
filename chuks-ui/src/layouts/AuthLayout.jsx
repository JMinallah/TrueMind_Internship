import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import authImage from '../assets/image 11.png';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area — no Navbar */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left — Image */}
        <div className="hidden md:flex md:w-1/2 bg-orange-50 items-center justify-center relative">
          <img src={authImage} alt="Chuks Eats" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-orange-500/20" />
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
