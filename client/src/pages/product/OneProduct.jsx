import FooterComp from "../../components/footer/FooterComp";
import { HeroImageAlt } from "../../components/heroImageAlt/HeroImageAlt";
import NavbarComp from "../../components/navbar/NavbarComp";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import textData from "../../textData.json";
import { CardExtComp } from "../../components/cards/CardExtComp";
import "./OneProductStyle.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export const OneProduct = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  /* REACT LOGIC */
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/showProductImages/${id}`)
      .then((res) => {
        const resultProduct = res.data.resultProduct;
        const resultImages = res.data.resultImages;
        const mergedData = resultProduct.map((productData) => {
          const productImages = resultImages.filter(
            (imageData) => imageData.product_id === productData.product_id
          );
          return { ...productData, images: productImages };
        });
        setMergedData(mergedData);
        console.log(mergedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* LOGIC REACT  */

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
      <hr />
      <section style={{ height: "56vh" }}>
        <div style={{ padding: "2vh" }}>
          <button onClick={() => navigate(-1)}>volver</button>
        </div>
        <div className="pisos-container">
          {mergedData.map((mergedItem) => {
            return (
              <CardExtComp
                key={mergedItem.product_id}
                title={mergedItem.title}
                description={mergedItem.description}
                featureOne={mergedItem.featureOne}
                featureTwo={mergedItem.featureTwo}
                featureThree={mergedItem.featureThree}
                price={mergedItem.price}
                navigate={() => navigate(-1)}
                buttonText={mergedItem.product_id}
                image={mergedItem.images[0].image_name} // Pasa las imágenes al componente CardExtComp
              />
            );
          })}
        </div>
      </section>
      <FooterComp />
    </>
  );
};
