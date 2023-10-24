import { useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateProductFormStyle.scss";

const initialValues = {
  title: "",
  type: "",
  description: "",
  featureOne: "",
  featureTwo: "",
  featureThree: "",
  price: "",
};

export const CreateProductFormComp = (props) => {
  const [product, setProduct] = useState(initialValues);
  const [files, setFiles] = useState();
  const [newProduct, setNewProduct] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  /*REACT LOGIC*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFiles = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append("product", JSON.stringify(product));

    if (files) {
      for (const elem of files) {
        newFormData.append("file", elem);
      }
    }
    axios
      .post(`http://localhost:4000/product/createProduct/${id}`, newFormData)
      .then((res) => {
        setNewProduct(res.data);
        navigate(`/admin/${id}`);
      })
      .catch((error) => console.log(error));
  };

  console.log("newProduct", newProduct);
  console.log(files);
  /*REACT LOGIC*/

  return (
    <>
      <form className="custom-form">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="title">{props.title}</label>
            <input
              type="text"
              id="title"
              name="title"
              value={product.title}
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
              value={product.type}
            >
              {/* <option disabled>select</option> */}
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
              value={product.description}
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
              value={product.featureOne}
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
              value={product.featureTwo}
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
              value={product.featureThree}
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
              value={product.price}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <label htmlFor="image">{props.image}</label>
            <input type="file" name="image" onChange={handleFiles} multiple />
          </Col>
        </Row>
      </form>
      <button onClick={onSubmit}>Enviar</button>
    </>
  );
};
