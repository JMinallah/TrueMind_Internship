import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { popularCategories, chefsSpecials } from '../data/foodItems';

const allItems = [...popularCategories, ...chefsSpecials];

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = allItems.find((f) => f.id === Number(id));

  const [selectedProtein, setSelectedProtein] = useState('fried-chicken');
  const [extras, setExtras] = useState({ plantain: false, coleslaw: false, pepper: false });
  const [instructions, setInstructions] = useState('');

  const toggleExtra = (key) =>
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-gray-500">
        <p>Item not found.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-4rem)] relative">
      {/* Close button */}
      <button
        onClick={() => navigate('/home')}
        className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-gray-500 hover:text-gray-900 transition text-xl font-bold"
      >
        ×
      </button>

      {/* Left — Image */}
      <div className="w-full md:w-1/2 bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Right — Details */}
      <div className="w-full md:w-1/2 overflow-y-auto px-6 py-8 md:py-12">
        <div className="w-full max-w-md mx-auto">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            {item.name}
          </h1>

          {/* Price */}
          <p className="text-xl font-bold text-orange-600 mb-4">{item.price}</p>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-5">
            {item.description}
          </p>

          {/* Tags / Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-3 py-1">
              🌶️ Mildly spicy
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
              🥬 Vegetarian option available
            </span>
            <a
              href="#"
              className="inline-flex items-center text-xs font-medium text-orange-600 underline hover:text-orange-700 transition px-1 py-1"
            >
              View Allergies
            </a>
          </div>

          {/* Choose Your Protein */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Choose Your Protein</h3>
            <div className="space-y-2">
              {[
                { key: 'fried-chicken', label: 'Fried Chicken', extra: '(Default)' },
                { key: 'grilled-fish', label: 'Grilled Fish', extra: '+₦500' },
                { key: 'beef', label: 'Beef', extra: '+₦700' },
              ].map((opt) => (
                <label
                  key={opt.key}
                  className={`flex items-center justify-between cursor-pointer rounded-xl border px-4 py-3 transition ${
                    selectedProtein === opt.key
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedProtein === opt.key ? 'border-orange-600' : 'border-gray-300'
                      }`}
                    >
                      {selectedProtein === opt.key && (
                        <span className="w-2 h-2 rounded-full bg-orange-600" />
                      )}
                    </span>
                    <span className="text-sm text-gray-800">{opt.label}</span>
                  </div>
                  <span className="text-xs text-orange-600 font-medium">{opt.extra}</span>
                  <input
                    type="radio"
                    name="protein"
                    value={opt.key}
                    checked={selectedProtein === opt.key}
                    onChange={() => setSelectedProtein(opt.key)}
                    className="sr-only"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Extra Sides */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Extra Sides (Optional)</h3>
            <div className="space-y-2">
              {[
                { key: 'plantain', label: 'Fried Plantain', price: '+₦700' },
                { key: 'coleslaw', label: 'Coleslaw', price: '+₦500' },
                { key: 'pepper', label: 'Extra Pepper Sauce', price: '+₦300' },
              ].map((side) => (
                <label
                  key={side.key}
                  className={`flex items-center justify-between cursor-pointer rounded-xl border px-4 py-3 transition ${
                    extras[side.key]
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center border-2 ${
                        extras[side.key] ? 'border-orange-600 bg-orange-600' : 'border-gray-300'
                      }`}
                    >
                      {extras[side.key] && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-gray-800">{side.label}</span>
                  </div>
                  <span className="text-xs text-orange-600 font-medium">{side.price}</span>
                  <input
                    type="checkbox"
                    checked={extras[side.key]}
                    onChange={() => toggleExtra(side.key)}
                    className="sr-only"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Special Instructions</h3>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
              rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
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
