import "./Home.scss";
import Main from "../../containers/Main/Main.jsx";
import NavBar from "../../containers/NavBar/NavBar.jsx";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBoar/SearchBar";
import Header from "./components/Header/Header";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getCourses = async () => {
    const url ="http://localhost:8080/courses";
    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  const searchCourses = courses.filter((course) => {
    const courseNameLower = course.name.toLowerCase();

    return courseNameLower.includes(searchTerm) && course.name;
  });




  return (
    <div className="home">
      <Header />
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