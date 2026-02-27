import cartImg1 from '../assets/Property 1=Default.png';
import cartImg2 from '../assets/Property 1=Variant2.png';
import cartImg3 from '../assets/Property 1=Variant4.png';
import cartImg4 from '../assets/Property 1=Variant5.png';

const cartItems = [
  {
    id: 1,
    name: 'Jollof Rice & Fried Chicken',
    price: 3200,
    img: cartImg1,
    customization: 'With plantain, extra pepper sauce',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Jollof Rice & Fried Chicken',
    price: 3200,
    img: cartImg2,
    customization: 'With plantain, extra pepper sauce',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Jollof Rice & Fried Chicken',
    price: 3200,
    img: cartImg3,
    customization: 'With plantain, extra pepper sauce',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Jollof Rice & Fried Chicken',
    price: 3200,
    img: cartImg4,
    customization: 'With plantain, extra pepper sauce',
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      <div className="bg-white rounded-2xl shadow p-6 divide-y divide-gray-200 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
            <img src={item.img} alt={item.name} className="w-24 h-20 object-cover rounded-lg border border-gray-200" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-semibold text-gray-900 text-base sm:text-lg">{item.name}</h2>
                  <div className="text-xs text-gray-400 mt-1">{item.customization}</div>
                </div>
                <div className="flex items-center gap-4 mt-3 sm:mt-0">
                  <span className="text-orange-600 font-bold text-base sm:text-lg">₦{item.price.toLocaleString()}</span>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1">
                    <button className="text-gray-500 hover:text-orange-600 text-lg font-bold px-1">-</button>
                    <span className="w-6 text-center font-medium">{item.quantity}</span>
                    <button className="text-gray-500 hover:text-orange-600 text-lg font-bold px-1">+</button>
                  </div>
                </div>
                <button className="ml-2 text-orange-600 hover:text-orange-800 text-lg" title="Remove">
                  &times;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-600 underline font-medium hover:text-blue-800 text-sm">+ Add more items from Chuks Kitchen</a>
    </main>
  );
};

export default Cart;
