import { useParams, Link } from 'react-router-dom';
import { popularCategories, chefsSpecials } from '../data/foodItems';

const allItems = [...popularCategories, ...chefsSpecials];

const FoodDetail = () => {
  const { id } = useParams();
  const item = allItems.find((f) => f.id === Number(id));

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Item not found.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
      {/* Left — Image */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Right — Details */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link
            to="/home"
            className="text-sm text-orange-600 font-medium hover:underline mb-6 inline-block"
          >
            ← Back to Menu
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {item.name}
          </h1>

          <p className="text-gray-500 text-sm mb-6">{item.description}</p>

          <div className="mb-8">
            <span className="text-2xl font-bold text-orange-600">{item.price}</span>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 font-bold hover:bg-gray-100 transition">
                  −
                </button>
                <span className="text-lg font-semibold text-gray-900 w-8 text-center">1</span>
                <button className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 font-bold hover:bg-gray-100 transition">
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition">
              Add to Cart
            </button>

            <button className="w-full border-2 border-orange-600 text-orange-600 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
