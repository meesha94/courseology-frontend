import "./App.scss";
import Home from "./containers/Home/Home";
import NavBar from "./containers/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Pages/Course/Course";
import User from "./Pages/User/User";
import EditCourse from "./containers/EditCourse/EditCourse";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/create" element={<User />} />
        <Route path="/course/edit/:id" element={<EditCourse />} />
      </Routes>
    </Router>
  );
};

export default App;
