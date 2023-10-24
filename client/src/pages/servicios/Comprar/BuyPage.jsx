import { useTranslation } from "react-i18next";
import NavbarComp from "../../../components/navbar/NavbarComp";
import FooterComp from "../../../components/footer/FooterComp";
import textData from "../../../textData.json";
import { HeroImageAlt } from "../../../components/heroImageAlt/HeroImageAlt";
import { CardExtComp } from "../../../components/cards/CardExtComp";
import { useNavigate } from "react-router-dom";
import imageBuy from "../../../assets/image/buy.png";
import { useEffect, useState } from "react";
import { FinderComp } from "../../../components/finder/FinderComp";
import { Row, Col } from "antd";
import axios from "axios";
import "./BuyStyle.scss";

export const BuyPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /*REACT LOGIC */
  const [product, setProduct] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]); // set all results

  const handleSearch = (filteredData) => {
    setFilteredResults(filteredData);
  };
  const handleReset = () => {
    setFilteredResults(product);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/getAllProduct")
      .then((res) => {
        setProduct(res.data);
        setFilteredResults(res.data);
        console.log("res.dataa", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*REACT LOGIC */

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
          <h1>{t("services.OptionOneTitle")}</h1>
        </div>

        <Row gutter={16}>
          {/* Columna para FinderComp */}
          <Col span={6}>
            <FinderComp onSearch={handleSearch} onReset={handleReset} />
          </Col>

          {/* Columna para Resultados filtrados */}
          <Col span={18}>
            <div className="pisos-containerFilterBuy">
              {filteredResults.length === 0 ? (
                <p>No hay match</p>
              ) : (
                filteredResults.map(
                  (
                    data // Usar filteredResults en lugar de product
                  ) => (
                    <CardExtComp
                      key={data.id}
                      title={data.title}
                      description={data.description}
                      sqm={data.featureOne}
                      rooms={data.featureTwo}
                      bathrooms={data.featureThree}
                      price={data.price}
                      navigate={() => navigate(`/services/${data.product_id}`)}
                      buttonText={t("cardProduct.buttonText")}
                      image={imageBuy}
                    />
                  )
                )
              )}
            </div>
          </Col>
        </Row>
        <button onClick={() => navigate(-1)}>volver</button>
        <hr />
      </section>
      <FooterComp />
    </>
  );
};
