import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SecctionWcarrouselStyle.scss";

import casaBonita1 from "../../../assets/image/casaBonita1.jpg";
import casaBonita2 from "../../../assets/image/casaBonita2.jpg";
import casaBonita3 from "../../../assets/image/casaBonita3.jpg";

export const SecctionWcarrousel = (props) => {
  const style = {
    size: {
      width: "30vw",
      height: "400vh",
    },
  };

  const images = [
    { src: casaBonita1, alt: "Propiedad 1" },
    { src: casaBonita2, alt: "Propiedad 2" },
    { src: casaBonita3, alt: "Propiedad 3" },
  ];

  return (
    <div className="divPpal">
      <div className="content">
        <h1 className="title">{props.title}</h1>
        <p className="description">{props.description}</p>
      </div>
      <Carousel showThumbs={false} showStatus={false} width={style.size.width}>
        {images.map((image, index) => (
          <img
            src={image.src}
            alt={image.alt}
            width={style.size.width}
            height={style.size.height}
          />
        ))}
      </Carousel>
    </div>
  );
};
