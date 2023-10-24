import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Card from "antd/es/card/Card";
import "./EditProductFormStyle.scss";

const initialValues = {
  title: "",
  type: "",
  description: "",
  featureOne: "",
  featureTwo: "",
  featureThree: "",
  price: "",
};

export const EditProductFormComp = (props) => {
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  const [showMsn, setShowMsn] = useState("");
  const [editProduct, setEditProduct] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/showProductImages/${id}`)

      .then((res) => {
        setProduct(res.data.resultProduct);
        setImages(res.data.resultImages);
        setEditProduct(res.data.resultProduct[0]);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const delImage = (id) => {
    axios
      .delete(`http://localhost:4000/product/delTotal/${id}`)
      .then((res) => {
        setImages(images.filter((e) => e.image_id !== id));
        setSuccessMessage("Imagen eliminada con éxito.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newFormData = new FormData();

    if (editProduct) {
      newFormData.append("editProduct", JSON.stringify(editProduct));
    }

    axios
      .put(`http://localhost:4000/product/editProduct/${id}`, newFormData)
      .then((res) => {
        setEditProduct(res.data);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFiles = (e) => {
    setFiles(e.target.files);
  };

  const addImages = () => {
    if (!files || files.length === 0) {
      setShowMsn("no has insertado imagen nueva");
    } else {
      const newFormData = new FormData();

      if (files) {
        for (const elem of files) {
          newFormData.append("file", elem);
        }
      }
      axios
        .put(`http://localhost:4000/product/addImages/${id}`, newFormData)
        .then((res) => {
          console.log(res.data, "RES DATA FILES");
          setImages(res.data);
          setShowMsn("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Card>
        {product?.map((element) => {
          return (
            <>
              <h3>{element.title}</h3>
            </>
          );
        })}
      </Card>
      <Card>
        {images.map((image) => {
          return (
            <>
              <div key={image.images_id}>
                <img
                  src={`/images/imageProduct/${image.image_name}`}
                  alt="product image"
                />
                <button onClick={() => delImage(image.images_id)}>X</button>
              </div>
            </>
          );
        })}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div>
          <label htmlFor="image">{props.image}</label>
          <input type="file" multiple onChange={handleFiles} />
          <button onClick={addImages}>añadir nueva imagen</button>
        </div>
      </Card>

      <form className="custom-form">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="title">{props.title}</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editProduct.title}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="type">{props.type}</label>
            <select
              id="type"
              name="type"
              onChange={handleChange}
              value={editProduct.type}
            >
              <option disabled>select</option>
              <option value={parseInt(1)}>{props.opt1}</option>
              <option value={parseInt(2)}>{props.opt2}</option>
            </select>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="description">{props.description}</label>
            <textarea
              name="description"
              value={editProduct.description}
              onChange={handleChange}
            ></textarea>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="featureOne">{props.featureOne}</label>
            <input
              type="text"
              name="featureOne"
              value={editProduct.featureOne}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="featureTwo">{props.featureTwo}</label>
            <input
              type="text"
              name="featureTwo"
              value={editProduct.featureTwo}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="featureThree">{props.featureThree}</label>
            <input
              type="text"
              name="featureThree"
              value={editProduct.featureThree}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="price">{props.price}</label>
            <input
              type="text"
              name="price"
              value={editProduct.price}
              onChange={handleChange}
            />
          </Col>
        </Row>
        {/* 
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="image">{props.image}</label>
            <input type="file" name="image" onChange={handleFiles} multiple />
          </Col>
        </Row> */}
      </form>
      <button onClick={onSubmit}>Enviar</button>
      <button onClick={() => navigate(-1)}>volver</button>
    </>
  );
};
