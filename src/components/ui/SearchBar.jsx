import { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-full">
      <div
        className={`relative flex items-center w-full h-12 rounded-lg 
        border-2 bg-white overflow-hidden
        ${isFocused ? "border-blue-500 shadow-lg" : "border-gray-200 shadow-sm"}
        transition-all duration-300 ease-in-out`}
      >
        <div className="grid place-items-center h-full w-12">
          <Search
            className={`h-5 w-5 ${
              isFocused ? "text-blue-500" : "text-gray-500"
            }`}
          />
        </div>

        <input
          className="h-full w-full outline-none text-base text-gray-700 pr-2 
          placeholder:text-gray-400"
          type="text"
          placeholder="Search anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {searchQuery && (
          <button
            onClick={handleClear}
            className="group grid place-items-center h-full w-12 
            hover:bg-gray-50 transition-colors duration-200"
          >
            <X
              className="h-5 w-5 text-gray-400 
            group-hover:text-gray-600"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
