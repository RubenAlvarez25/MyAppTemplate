import { CardComp } from "../../cards/CardComp";
import { useTranslation } from "react-i18next";
import imageCard1 from "../../../assets/image/casaBonita1.jpg";
import imageCard2 from "../../../assets/image/casaBonita2.jpg";
import imageCard3 from "../../../assets/image/casaBonita3.jpg";
import "./SecctionWcardsStyle.scss";

export const SecctionWcards = (props) => {
  const { t } = useTranslation();
  return (
    <secction className="divPpal">
      <div className="content">
        <div className="titlesecction">
          <h1>{props.title}</h1>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="cardsDiv">
        <CardComp
          title={t("cards.one.title")}
          description={t("cards.one.description")}
          buttonText={t("cards.one.CTA_button")}
          image={imageCard1}
        />
        <CardComp
          title={t("cards.two.title")}
          description={t("cards.two.description")}
          buttonText={t("cards.two.CTA_button")}
          image={imageCard2}
        />
        <CardComp
          title={t("cards.three.title")}
          description={t("cards.three.description")}
          buttonText={t("cards.three.CTA_button")}
          image={imageCard3}
        />
      </div>
    </secction>
  );
};
