import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import NavbarComp from "../../components/navbar/NavbarComp";
import textData from "../../textData.json";
import FooterComp from "../../components/footer/FooterComp";
import { Outlet, useNavigate } from "react-router-dom";
import { HeroImageAlt } from "../../components/heroImageAlt/HeroImageAlt";

export const AboutPage = () => {
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
      <hr />

      <HeroImageAlt title={t("heroImage.about")} />
      <hr />

      <Row
        gutter={[24, 24]}
        justify="center"
        alignItems="center"
        className="my-4"
        style={{ height: "78vh", margin: 0 }}
      >
        <Col
          lg={4}
          md={24}
          style={{
            backgroundColor: "#f0f0f0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => navigate("/about/")}
            style={{ display: "block", margin: "10px 0" }}
          >
            {t("aboutPage.layout.buttonOpt1")}
          </button>
          <button
            onClick={() => navigate("/about/agentes")}
            style={{ display: "block", margin: "10px 0" }}
          >
            {t("aboutPage.layout.buttonOpt2")}
          </button>
          <button
            onClick={() => navigate("/about/location")}
            style={{ display: "block", margin: "10px 0" }}
          >
            {t("aboutPage.layout.buttonOpt3")}
          </button>
        </Col>
        <Col
          lg={20}
          md={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
          }}
        >
          <Outlet />
        </Col>
      </Row>

      <FooterComp />
    </>
  );
};
