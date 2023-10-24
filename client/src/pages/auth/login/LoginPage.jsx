import FooterComp from "../../../components/footer/FooterComp";
import { LoginFormComp } from "../../../components/forms/loginForm/LoginFormComp";
import { HeroImageAlt } from "../../../components/heroImageAlt/HeroImageAlt";
import NavbarComp from "../../../components/navbar/NavbarComp";
import textData from "../../../textData.json";

export const LoginPage = () => {
  return (
    <>
      <NavbarComp title={textData.meta.title} />
      <HeroImageAlt />
      <section style={{ marginTop: "0vh", height: "55vh" }}>
        <LoginFormComp
          email={"inserte email"}
          password={"inserte password"}
          buttonBack={"volver"}
        />
      </section>
      <FooterComp />
    </>
  );
};
