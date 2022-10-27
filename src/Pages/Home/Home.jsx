import Main from "../../containers/Main/Main.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import "./Home.scss";
import music from "../../assets/music/theme.mp3"

const Home = ({searchTerm, handleInput, searchCourses}) => {

  return (
    <div className="home">
      <SearchBar
        className="home__search-box"
        label={"courses"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <audio controls autoplay>
        <source src={music} type="audio/mpeg"></source>
      </audio>
      <Main className="home__main" courses={searchCourses} />
    </div>
  )
}
  export default Home;