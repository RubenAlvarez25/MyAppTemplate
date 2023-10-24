import { LangButton } from "../buttons/languageButton/LangButton";
import { Link } from "react-router-dom";
import "./NavbarStyle.scss";

const NavbarComp = (props) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">{props.title}</div>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>{props.inicio}</Link>
          </li>
          <li>
            <Link to={"/about"}>{props.acercaDe}</Link>
          </li>
          <li>
            <Link to={"/services"}>{props.servicios}</Link>
          </li>
          <li>
            <Link to={"/contact"}>{props.contacto}</Link>
          </li>
        </ul>
        <LangButton />
      </nav>
    </>
  );
};

export default NavbarComp;
