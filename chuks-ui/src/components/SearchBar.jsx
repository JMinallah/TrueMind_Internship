import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="relative z-20 flex justify-center -mt-6 sm:-mt-7 px-4 sm:px-6">
      <div className="flex items-center w-full max-w-2xl bg-white rounded-full shadow-lg px-4 sm:px-5 py-3 sm:py-4">
        <FiSearch className="text-gray-400 text-xl mr-3 flex-shrink-0" />
        <input
          type="text"
          placeholder="What are you craving?"
          className="w-full text-gray-700 placeholder-gray-400 text-base focus:outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

export default SearchBar;
