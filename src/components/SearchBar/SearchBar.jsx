import "./SearchBar.scss"

const SearchBar = (props) => {
    const { label, searchTerm, handleInput } = props;
  
    return (
      <form className="search-bar">
        <label htmlFor={label} className="search-bar__label"></label>
        <input
          type="text"
          name={label}
          value={searchTerm}
          onInput={handleInput}
          placeholder="Search for Courses"
          className="search-bar__input"
        />
      </form>
    );
  };
  
  export default SearchBar;