import "./SecctionSimpleStyle.scss";

export const SecctionSimple = (props) => {
  return (
    <section className="simple-secction">
      <h1 className="secction-title">{props.title}</h1>
      <div className="description-container">
        <p className="description">{props.description}</p>
        <p className="description">{props.moreDescription}</p>
      </div>
    </section>
  );
};
