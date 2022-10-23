import hogwarts from "../../assets/images/hogwarts.jpeg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
        <img src={hogwarts} alt=" hogwarts school grounds"/>
        <h1 className="header__title">Hogwarts School Of Witchcraft and Wizardry</h1>
    </div>
  )
}

export default Header