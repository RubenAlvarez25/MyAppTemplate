import NavbarComp from "../../components/navbar/NavbarComp";
import FooterComp from "../../components/footer/FooterComp";
import textData from "../../textData.json";
import { useTranslation } from "react-i18next";
import { HeroImage } from "../../components/heroImage/HeroImage";
import { SecctionWcarrousel } from "../../components/section/seccionConCarrousel/secctionWcarrousel";
import { SecctionWcards } from "../../components/section/seccionConCards/SecctionWcards";
import { SecctionSimple } from "../../components/section/seccionSimple/SecctionSimple";
import { SecctionWform } from "../../components/section/seccionConForm/SecctionWform";

export const LandingPageComp = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Navbar */}
      <NavbarComp
        title={textData.meta.title}
        inicio={t("navbar.inicio")}
        acercaDe={t("navbar.acercaDe")}
        servicios={t("navbar.servicios")}
        contacto={t("navbar.contacto")}
      />
      {/* HeroImage */}
      <HeroImage title={textData.meta.title} parrafo={t("heroImage.parrafo")} />
      <hr />
      {/* Section with Carousel */}
      <SecctionWcarrousel
        title={t("secctionWcarrousel.title")}
        description={t("secctionWcarrousel.description")}
      />
      <hr />
      {/* Section with cards */}
      <SecctionWcards
        title={t("secctionWcards.title")}
        description={t("secctionWcards.description")}
      />
      <hr />
      {/* Section Simple with texts */}
      <SecctionSimple
        title={t("secctionSimple.title")}
        description={t("secctionSimple.description")}
        moreDescription={t("secctionSimple.moreDescription")}
      />
      <hr />
      {/* Section with form */}
      <SecctionWform
        title={t("secctionWform.title")}
        description={t("secctionWform.description")}
      />
      <hr />
      {/* Footer */}
      <FooterComp a={"admin?"} />
    </>
  );
};
