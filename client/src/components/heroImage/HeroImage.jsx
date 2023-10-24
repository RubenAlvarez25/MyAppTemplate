import "./HeroImageStyle.scss";

export const HeroImage = (props) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{props.title}</h1>
        <p className="hero-description">{props.parrafo}</p>
      </div>
    </div>
  );
};
