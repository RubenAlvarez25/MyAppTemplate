import FooterComp from "../../../components/footer/FooterComp";
import { HeroImageAlt } from "../../../components/heroImageAlt/HeroImageAlt";
import NavbarComp from "../../../components/navbar/NavbarComp";
import textData from "../../../textData.json";
import "./CreateProductStyle.scss";
import { CreateProductFormComp } from "../../../components/forms/createProductForm/CreateProductFormComp";
import { useNavigate } from "react-router-dom";

export const CreateProduct = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarComp title={textData.meta.title} />
      <HeroImageAlt />
      <section>
        <h2>{props.title}</h2>
        <CreateProductFormComp
          title={"titulo"}
          type={"type"}
          opt1={"venta"}
          opt2={"alquiler"}
          description={"descripcion"}
          featureOne={"featureOne"}
          featureTwo={"featureTwo"}
          featureThree={"featureThree"}
          price={"price €"}
          image={"image"}
        />
        <button onClick={() => navigate(`/admin/login`)}>
          {props.buttonText}
        </button>
      </section>

      <FooterComp />
    </>
  );
};
