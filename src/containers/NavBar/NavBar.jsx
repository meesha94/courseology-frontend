import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";

const NavBar = () => {
  return(
    <div className="nav">
    <img src={logo} alt="hogwarts school logo" className="nav__item-logo"/>
    <Link className="nav__item-home" to={"/"}>
      <h2>Home</h2>
    </Link>
    <Link className="nav__item-user" to={"/user"}>
      <h2>User</h2>
    </Link>
  </div>
  )
}

export default NavBar