import { useState } from 'react';
import { Link } from 'react-router-dom';
import welcomeImg from '../assets/Welcome.png';
import SearchBar from '../components/SearchBar';
import { popularCategories, chefsSpecials } from '../data/foodItems';

const CategoryCard = ({ item }) => (
  <Link to={`/food/${item.id}`} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white block">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-3 text-center">
      <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition">{item.name}</h3>
    </div>
  </Link>
);

const SpecialCard = ({ item }) => (
  <Link to={`/food/${item.id}`} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white block">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition">{item.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-orange-600 font-bold text-sm">{item.price}</span>
        <button
          onClick={(e) => { e.preventDefault(); /* add to cart logic */ }}
          className="bg-orange-600 text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </Link>
);

const Home = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllSpecials, setShowAllSpecials] = useState(false);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-gray-300 overflow-hidden">
        {/* Hero background image */}
        <img src={welcomeImg} alt="Welcome" className="absolute inset-0 w-full h-full object-cover object-centre" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-[5]" />

        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-left px-6 sm:px-10 lg:px-16">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Taste the Best of&nbsp;
            <span className="text-orange-400">African Cuisine</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-gray-200 text-sm sm:text-lg md:text-xl max-w-2xl">
            Fresh ingredients, bold flavours, and meals made with love — delivered straight to your table.
          </p>
          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#menu"
              className="bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-orange-700 transition text-center"
            >
              Explore Menu
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-gray-900 transition text-center"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Placeholder image — swap src later */}
        {/* <img src="/images/hero.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover" /> */}
      </section>

      {/* ── Search Bar (half in hero, half out) ── */}
      <SearchBar />

      {/* ── Popular Categories ── */}
      <section id="menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Popular Categories
        </h2>
        <p className="mt-2 text-gray-500 text-center max-w-xl mx-auto">
          Hand-picked favourites from our kitchen — there's something for everyone.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
          {popularCategories.map((item, index) => (
            <div key={item.id} className={!showAllCategories && index >= 3 ? 'hidden sm:block' : ''}>
              <CategoryCard item={item} />
            </div>
          ))}
        </div>

        {/* View All — mobile only */}
        {!showAllCategories && (
          <div className="mt-6 text-center sm:hidden">
            <button
              onClick={() => setShowAllCategories(true)}
              className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition"
            >
              View All Categories →
            </button>
          </div>
        )}
      </section>

      {/* ── Spacer between categories ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200 my-4 sm:my-6" />
      </div>

      {/* ── Chef's Specials ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Chef's Specials
        </h2>
        <p className="mt-2 text-gray-500 text-center max-w-xl mx-auto">
          Exclusive creations by our head chef — bold, unique and unforgettable.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
          {chefsSpecials.map((item, index) => (
            <div key={item.id} className={!showAllSpecials && index >= 3 ? 'hidden sm:block' : ''}>
              <SpecialCard item={item} />
            </div>
          ))}
        </div>

        {/* View All — mobile only */}
        {!showAllSpecials && (
          <div className="mt-6 text-center sm:hidden">
            <button
              onClick={() => setShowAllSpecials(true)}
              className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition"
            >
              View All Specials →
            </button>
          </div>
        )}
      </section>

      {/* ── Bottom Banner Section ── */}
      <section className="relative h-[40vh] sm:h-[50vh] bg-gray-300 overflow-hidden">
        {/* Replace this div with an <img> tag later */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Hungry? We've Got You.
          </h2>
          <p className="mt-3 text-gray-200 text-lg max-w-xl">
            Order now and enjoy fast delivery right to your doorstep. Your next favourite meal is just a click away.
          </p>
          <a
            href="#"
            className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
          >
            Order Now
          </a>
        </div>

        {/* Placeholder image — swap src later */}
        {/* <img src="/images/banner.jpg" alt="Banner" className="absolute inset-0 w-full h-full object-cover" /> */}
      </section>
    </>
  );
};

export default Home;
