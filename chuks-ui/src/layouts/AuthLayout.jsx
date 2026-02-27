import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import authImage from '../assets/image 11.png';

const AuthLayout = () => {
  const location = useLocation();
  const isWelcome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area — no Navbar */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left — Hero Image with overlay text */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
          <img src={authImage} alt="Nigerian family meal" className="w-full h-full object-cover" />
          {/* Orange-tinted overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 to-black/70" />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight italic">
              Chuks Kitchen
            </h1>
            <p className="mt-4 text-gray-100 text-base lg:text-lg max-w-md leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* Right — Page content (form) */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Full footer on SignIn/SignUp pages only; Welcome has its own mini footer */}
      {!isWelcome && <Footer />}
    </div>
  );
};

export default AuthLayout;
