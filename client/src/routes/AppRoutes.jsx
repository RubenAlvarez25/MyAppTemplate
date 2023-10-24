import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPageComp } from "../pages/landing/LandingPageComp";
import { AboutPage } from "../pages/about/AboutPage";
import { useTranslation } from "react-i18next";
import textData from "../textData.json";
import { TextComp } from "../components/texto/TextComp";
import { SecctionWcardsAlt } from "../components/section/seccionConCardsAlt/SecctionWcardsAlt";
import { SectionWtextImage } from "../components/section/seccionTextoConImage/SectionWtextImage";
import { ContactPage } from "../pages/contactUs/ContactPage";
import { ServicePage } from "../pages/servicios/ServicePage";
import { RentPage } from "../pages/servicios/Alquiler/RentPage";
import { BuyPage } from "../pages/servicios/Comprar/BuyPage";
import { OneProduct } from "../pages/product/OneProduct";
import { LoginPage } from "../pages/auth/login/LoginPage";
import { LandingAdminPage } from "../pages/admin/LandingAdmin/LandingAdminPage";
import { CreateProduct } from "../pages/admin/createProduct/CreateProduct";
import { AllProduct } from "../pages/admin/allProduct/AllProduct";
import { Prueba } from "../pages/Prueba";
import { OneProductEdit } from "../pages/admin/editProduct/OneProductEdit";

export const AppRoutes = () => {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageComp />} />
        <Route path="/about/*" element={<AboutPage />}>
          <Route
            index
            element={
              <TextComp
                title={t("bigText.title")}
                pseudo={textData.meta.title}
                content={t("bigText.content")}
              />
            }
          />
          <Route
            path="agentes"
            element={
              <SecctionWcardsAlt
                title={t("aboutPage.sectionWCardsAlt.title")}
              />
            }
          />
          <Route
            path="location"
            element={
              <SectionWtextImage
                title={t("aboutPage.location.title")}
                content={t("aboutPage.location.content")}
              />
            }
          />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/rent" element={<RentPage />} />
        <Route path="/services/buy" element={<BuyPage />} />
        <Route path="/services/:id" element={<OneProduct />} />
        {/* Auth Page */}
        <Route path="/login" element={<LoginPage />} />
        {/* Admin Page */}
        <Route
          path="/admin/:id"
          element={<LandingAdminPage buttonText={"volver inicio"} />}
        />
        <Route
          path="/admin/createProduct/:id"
          element={
            <CreateProduct
              title={"sube tus productos"}
              buttonText={"volver atras"}
            />
          }
        />
        <Route path="/admin/allProduct" element={<AllProduct />} />
        <Route path="/admin/OneProductEdit/:id" element={<OneProductEdit />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  );
};
