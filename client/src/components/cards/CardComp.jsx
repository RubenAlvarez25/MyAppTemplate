import "./CardStyle.scss";

export const CardComp = (props) => {
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
          src={props.image}
          alt={"cardImgTitle"}
          width={style.size.width}
          height={style.size.height}
        />
        <hr />
        <p className="card-description">{props.description}</p>
        <button onClick={props.navigate} className="card-button">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default CardComp;
