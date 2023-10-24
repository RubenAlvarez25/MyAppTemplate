import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import textData from "../../textData.json";
import NavbarComp from "../../components/navbar/NavbarComp";
import FooterComp from "../../components/footer/FooterComp";
import { SecctionWform } from "../../components/section/seccionConForm/SecctionWform";

export const ContactPage = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <NavbarComp
        title={textData.meta.title}
        inicio={t("navbar.inicio")}
        acercaDe={t("navbar.acercaDe")}
        servicios={t("navbar.servicios")}
        contacto={t("navbar.contacto")}
      />
      <section style={{ marginTop: "0vh", height: "86vh" }}>
        <SecctionWform
          title={t("secctionWform.titleOnPage")}
          description={t("secctionWform.description")}
        />
      </section>

      <FooterComp />
    </>
  );
};
