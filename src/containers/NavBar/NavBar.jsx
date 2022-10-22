import "../NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    
    <div className="nav">
    <Link className="nav__item" to="/">
      Home
    </Link>
    <Link className="nav__item" to="/user">
      User
    </Link>
  </div>
  )
}

export default NavBar