import "./App.scss";
import Home from "./containers/Home/Home";
import NavBar from "./containers/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Pages/Course/Course";
import EditGreeting from "./containers/EditGreeting/EditGreeting";
import Course from "./Pages/Course/Course";
import User from "./Pages/User/User";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<Course />} />
        <Route path="/greeting/user" element={<User />} />
        <Route path="/greeting/edit/:id" element={<EditGreeting />} />
      </Routes>
    </Router>
  );
};

export default App;
