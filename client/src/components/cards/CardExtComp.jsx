import { useTranslation } from "react-i18next";
import "./CardStyle.scss";

export const CardExtComp = (props) => {
  const { t } = useTranslation();

  const style = {
    size: {
      width: "150px",
      height: "150px",
    },
  };
  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <div className="card-content">
        <img
          className="card-image"
          src={`/images/imageProduct/${props.image}`}
          alt={"cardImgTitle"}
          width={style.size.width}
          height={style.size.height}
        />
        <hr />
        <p className="card-description">{props.description}</p>
        <p className="card-description">
          {props.featureOne} {t("cardProduct.opt1")}
        </p>
        <p className="card-description">
          {props.featureTwo} {t("cardProduct.opt2")}
        </p>
        <p className="card-description">
          {props.featureThree} {t("cardProduct.opt3")}
        </p>
        <p className="card-description">
          {props.price} {t("cardProduct.opt4")}
        </p>
        <button onClick={props.navigate} className="card-button">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};
