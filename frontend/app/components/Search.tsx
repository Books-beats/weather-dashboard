import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { getLocationSuggestions } from "../services/weatherService";
import {
  SearchAutoSuggestionWrapper,
  SearchWrapper,
  AutoSuggestion,
} from "../styles/components/Search.styles";

const Search = (props) => {
  const {
    darkMode,
    searchQuery,
    setSearchQuery,
    handleSearch,
    showSuggestions,
    setShowSuggestions,
  } = props;
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e: any) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 2) {
      try {
        const result = await getLocationSuggestions(searchQuery);
        setSuggestions(result);
        setShowSuggestions(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  return (
    <>
      <SearchAutoSuggestionWrapper>
        <SearchWrapper $darkmode={darkMode}>
          <IoIosSearch />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for a location..."
          />
        </SearchWrapper>

        {showSuggestions && suggestions.length > 0 && (
          <AutoSuggestion $darkmode={darkMode}>
            {suggestions.map((sug: any) => (
              <button
                key={sug.id}
                onClick={() => {
                  setSearchQuery(sug.name);
                  handleSearch(sug);
                }}
              >
                <FiMapPin />
                <span>{sug.name}</span>
              </button>
            ))}
          </AutoSuggestion>
        )}
      </SearchAutoSuggestionWrapper>
    </>
  );
};

export default Search;
