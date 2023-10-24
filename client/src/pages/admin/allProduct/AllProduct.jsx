import { useEffect, useState } from "react";
import axios from "axios";
import textData from "../../../textData.json";
import NavbarComp from "../../../components/navbar/NavbarComp";
import { HeroImageAlt } from "../../../components/heroImageAlt/HeroImageAlt";
import FooterComp from "../../../components/footer/FooterComp";
import { useNavigate } from "react-router-dom";
import "./AllProductStyle.scss";

export const AllProduct = (props) => {
  /*REACT LOGIC */
  const [products, setProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/product/getAllProduct")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delProduct = (id) => {
    axios
      .delete(`http://localhost:4000/product/delProduct/${id}`)
      .then((res) => {
        setProducts(products.filter((elem) => elem.product_id !== id));
        setSuccessMessage("Imagen eliminada con éxito.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*REACT LOGIC */

  return (
    <>
      <NavbarComp title={textData.meta.title} />
      <HeroImageAlt />
      <section>
        <div className="table-container">
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          <table className="product-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>ID del Producto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((element, index) => (
                <tr key={index}>
                  <td>{element.title}</td>
                  <td>{element.product_id}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() =>
                        navigate(`/admin/OneProductEdit/${element.product_id}`)
                      }
                    >
                      Editar
                    </button>
                    <button onClick={() => delProduct(element.product_id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <button onClick={() => navigate(-1)}>volver a inicio</button>
      <FooterComp />
    </>
  );
};
