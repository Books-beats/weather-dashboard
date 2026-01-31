import { FiMoon, FiSun } from "react-icons/fi";
import { HeaderWrapper } from "../styles/components/Headers.styles";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <>
      <HeaderWrapper $darkmode={darkMode}>
        <div>
          <h1>Weather</h1>
          <p>Search for a city to view current conditions</p>
        </div>
        <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </HeaderWrapper>
    </>
  );
};

export default Header;
