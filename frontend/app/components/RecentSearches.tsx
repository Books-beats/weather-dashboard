import { Wrapper } from "../styles/components/RecentSearches.styles";

const RecentSearches = ({ darkMode, recentSearches, handleSearch }) => {
  return (
    <>
      <Wrapper $darkmode={darkMode}>
        <h3>Recent Searches</h3>
        <div>
          {recentSearches.map((loc, idx) => (
            <button key={idx} onClick={() => handleSearch(loc)}>
              {loc.name}
            </button>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default RecentSearches;
