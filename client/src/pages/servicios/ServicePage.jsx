import { useTranslation } from "react-i18next";
import imageCardOne from "../../assets/image/buy.png";
import imageCardTwo from "../../assets/image/rent.png";
import textData from "../../textData.json";
import NavbarComp from "../../components/navbar/NavbarComp";
import CardComp from "../../components/cards/CardComp";
import FooterComp from "../../components/footer/FooterComp";
import { HeroImageAlt } from "../../components/heroImageAlt/HeroImageAlt";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { ContactButton } from "../../components/buttons/contactButton/ContactButton";

export const ServicePage = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <NavbarComp
        title={textData.meta.title}
        inicio={t("navbar.inicio")}
        acercaDe={t("navbar.acercaDe")}
        servicios={t("navbar.servicios")}
        contacto={t("navbar.contacto")}
      />
      <HeroImageAlt title={t("services.heroTitle")} />
      <hr />
      <div>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5vh",
          }}
        >
          {t("services.title")}
        </h1>

        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "55vh",
          }}
        >
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardComp
              title={t("services.cards.one.title")}
              buttonText={t("services.cards.one.CTA_button")}
              navigate={() => navigate("/services/buy")}
              image={imageCardOne}
            />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardComp
              title={t("services.cards.two.title")}
              buttonText={t("services.cards.two.CTA_button")}
              navigate={() => navigate("/services/rent")}
              image={imageCardTwo}
            />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2vh",
          }}
        >
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ContactButton buttonText={t("buttonContact.title")} />
          </Col>
        </Row>
      </div>
      <FooterComp />
    </>
  );
};
