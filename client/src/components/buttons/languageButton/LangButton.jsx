import { useState } from "react";
import { changeLanguage } from "../../../i18n/i18n";
import "./LangButtonStyle.scss";

export const LangButton = () => {
  const [bool, setBool] = useState(false);
  const handleButtonClick = () => {
    setBool(!bool);
    const language = bool ? "es" : "en";
    changeLanguage(language);
  };

  return (
    <button onClick={handleButtonClick}>
      {bool ? "  Ver en Español" : " See in English"}
    </button>
  );
};
