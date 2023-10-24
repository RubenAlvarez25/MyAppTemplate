import CardComp from "../../../components/cards/CardComp";
import FooterComp from "../../../components/footer/FooterComp";
import { HeroImageAlt } from "../../../components/heroImageAlt/HeroImageAlt";
import NavbarComp from "../../../components/navbar/NavbarComp";
import { useNavigate, useParams } from "react-router-dom";
import textData from "../../../textData.json";

import "./LandingAdminStyle.scss";
import { TableComponent } from "../../../components/tableComponent/TableComponent";

export const LandingAdminPage = (props) => {
  /*REACT LOGIC */

  const navigate = useNavigate();
  const { id } = useParams();

  /*REACT LOGIC */

  return (
    <>
      <NavbarComp title={textData.meta.title} />
      <HeroImageAlt />
      <section>
        <CardComp
          title={"Añadir viviendas"}
          image={""}
          buttonText={"ir"}
          navigate={() => navigate(`/admin/createProduct/${id}`)}
        />
        <CardComp
          title={"Ver todo"}
          image={""}
          buttonText={"ir"}
          navigate={() => navigate(`/admin/allProduct`)}
        />

        <h3>Posibles clientes</h3>
        <TableComponent />

        <button onClick={() => navigate("/")}>{props.buttonText}</button>
      </section>
      <FooterComp />
    </>
  );
};
