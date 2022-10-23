import "./App.scss";
import { useState, useEffect } from "react";
import Home from "./Pages/Home/Home.jsx";
import NavBar from "./containers/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Pages/Course/Course";
import User from "./Pages/User/User";


const App = () => {
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
    <Router>
      <NavBar />
      <Routes>
        <Route path="/course/:id" element={<Course />} />
        <Route path="/course/create" element={<User />} />
        <Route path="/" element={<Home searchTerm={searchTerm} handleInput={handleInput} searchCourses={searchCourses}/>} />
      </Routes>
    </Router>
  );
};

export default App;
