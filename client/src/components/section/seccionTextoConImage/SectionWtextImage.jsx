import { Typography } from "antd";
import Image from "../../../assets/image/marCasa.jpg";
import "./SectionWtextImageStyle.scss";

const { Title, Paragraph } = Typography;

export const SectionWtextImage = (props) => {
  return (
    <section className="text-image-container">
      <div className="text-content">
        <Title level={2}>{props.title}</Title>
        <Paragraph>{props.content}</Paragraph>
      </div>
      <img className="image" src={Image} alt="imagenDeCiudad" />
    </section>
  );
};
