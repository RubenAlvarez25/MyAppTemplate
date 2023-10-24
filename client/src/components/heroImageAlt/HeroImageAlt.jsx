import "./HeroImageAltStyle.scss";

export const HeroImageAlt = (props) => {
  return (
    <div className="heroAlt">
      <div className="hero-contentAlt">
        <h1 className="hero-titleAlt">{props.title}</h1>
        <p className="hero-descriptionAlt">{props.parrafo}</p>
      </div>
    </div>
  );
};
