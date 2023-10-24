import { CardComp } from "../../cards/CardComp";
import { useTranslation } from "react-i18next";
import imageAgent1 from "../../../assets/image/chico1.jpg";
import imageAgent2 from "../../../assets/image/chico2.jpg";
import imageAgent3 from "../../../assets/image/chico3.jpg";
import "./SecctionWcardsAltStyle.scss";

export const SecctionWcardsAlt = (props) => {
  const { t } = useTranslation();
  return (
    <secction className="divPpalAlt">
      <div className="contentAlt">
        <div className="titlesecctionAlt">
          <h1>{props.title}</h1>
        </div>
        <div className="descriptionAlt">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="cardsDivAlt">
        <CardComp
          title={t("aboutPage.sectionWCardsAlt.cards.one.title")}
          description={t("aboutPage.sectionWCardsAlt.cards.one.description")}
          buttonText={t("aboutPage.sectionWCardsAlt.cards.one.CTA_button")}
          image={imageAgent1}
        />
        <CardComp
          title={t("aboutPage.sectionWCardsAlt.cards.two.title")}
          description={t("aboutPage.sectionWCardsAlt.cards.two.description")}
          buttonText={t("aboutPage.sectionWCardsAlt.cards.two.CTA_button")}
          image={imageAgent2}
        />
        <CardComp
          title={t("aboutPage.sectionWCardsAlt.cards.three.title")}
          description={t("aboutPage.sectionWCardsAlt.cards.three.description")}
          buttonText={t("aboutPage.sectionWCardsAlt.cards.three.CTA_button")}
          image={imageAgent3}
        />
      </div>
    </secction>
  );
};
