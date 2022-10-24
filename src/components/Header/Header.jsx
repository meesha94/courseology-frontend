import hogwarts from "../../assets/images/hogwarts.jpg";
import logo from "../../assets/images/logo.png";
import name from "../../assets/images/name.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
        <img src={hogwarts} alt=" hogwarts school grounds" className="header__image"/>
        <div className="header__heading">
        <img src={logo} alt="hogwarts school logo" className="header__logo"/>
        <img src={name} alt="school name" className="header__title"/>
        </div>
    </div>
  )
}

export default Header