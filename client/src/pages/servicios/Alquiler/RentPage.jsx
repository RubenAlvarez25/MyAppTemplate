import { useTranslation } from "react-i18next";
import NavbarComp from "../../../components/navbar/NavbarComp";
import FooterComp from "../../../components/footer/FooterComp";
import textData from "../../../textData.json";
import data from "../../../data/dataRent";
import { HeroImageAlt } from "../../../components/heroImageAlt/HeroImageAlt";
import { CardExtComp } from "../../../components/cards/CardExtComp";
import { useNavigate } from "react-router-dom";
import imageRent from "../../../assets/image/rent.png";
import { useState } from "react";
import "./RentStyle.scss";

export const RentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* REACT LOGIC*/
  const [searchInput, setSearchInput] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  /*LOGIC REACT*/
  return (
    <>
      <NavbarComp
        title={textData.meta.title}
        inicio={t("navbar.inicio")}
        acercaDe={t("navbar.acercaDe")}
        servicios={t("navbar.servicios")}
        contacto={t("navbar.contacto")}
      />
      <HeroImageAlt />
      <section className="section">
        <div className="section-title">
          <h1>Pisos Alquiler</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {searchInput && (
          <div className="pisos-containerFilter">
            {filteredData.map((data) => (
              <>
                <CardExtComp
                  key={data.id}
                  title={data.name}
                  description={data.description}
                  sqm={data.sqM}
                  rooms={data.rooms}
                  bathrooms={data.bathrooms}
                  price={data.price}
                  navigate={() => navigate(`/services/${data.id}`)}
                  buttonText={data.id}
                  image={imageRent}
                />
              </>
            ))}
          </div>
        )}

        <hr />
        <div className="pisos-container">
          {data.map((data) => (
            <CardExtComp
              key={data.id}
              title={data.name}
              description={data.description}
              sqm={data.sqM}
              rooms={data.rooms}
              bathrooms={data.bathrooms}
              price={data.price}
              navigate={() => navigate(`/services/${data.id}`)}
              buttonText={data.id}
              image={imageRent}
            />
          ))}
        </div>
        <button onClick={() => navigate(-1)}>volver</button>
      </section>

      <FooterComp />
    </>
  );
};
