import FooterComp from "../../../components/footer/FooterComp";
import { EditProductFormComp } from "../../../components/forms/editProductForm/EditProductFormComp";
import { HeroImageAlt } from "../../../components/heroImageAlt/HeroImageAlt";
import NavbarComp from "../../../components/navbar/NavbarComp";
import textData from "../../../textData.json";
import "./OneProductEditStyle.scss";

export const OneProductEdit = () => {
  return (
    <>
      <NavbarComp title={textData.meta.title} />
      <HeroImageAlt />
      <section>
        <h1>edit</h1>
        <EditProductFormComp
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
      </section>
      <FooterComp />
    </>
  );
};
