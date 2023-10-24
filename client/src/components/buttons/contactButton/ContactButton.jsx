import { useNavigate } from "react-router-dom";

import "./ContactButtonStyle.scss";

export const ContactButton = (props) => {
  const navigate = useNavigate();

  const toContact = () => {
    navigate("/contact");
  };

  return (
    <button className="Contactbutton" onClick={toContact}>
      {props.buttonText}
    </button>
  );
};
