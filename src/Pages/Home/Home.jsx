import Main from "../../containers/Main/Main.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = ({searchTerm, handleInput, searchCourses}) => {

  return (
    <div className="home">
      <SearchBar
        className="home__search-box"
        label={"courses"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Main className="home__main" courses={searchCourses} />
    </div>
  )
}
  export default Home;