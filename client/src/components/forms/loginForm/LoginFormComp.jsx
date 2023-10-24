import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import "./LoginFormStyle.scss";

const initialValue = {
  email: "",
  password: "",
};

export const LoginFormComp = (props) => {
  const [login, setLogin] = useState(initialValue);
  const [msgError, setMsgError] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  /*REACT LOGIC */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:4000/users/login", login)
      .then((res) => {
        setUser(res.data);

        navigate(`/admin/${res.data.user.user_id}`);
      })
      .catch((err) => {
        console.log(err);
        setMsgError(
          "Error de Login. Por favor, revisa tus credenciales e inténtalo de nuevo."
        );
        handleShow();
      });
  };
  const handleShow = () => setShowModal(true);

  /*LOGIC REACT */

  return (
    <>
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <div className="form-container">
            <div className="input-container">
              <label htmlFor="email">{props.email}</label>
              <input
                type="text"
                className="input-field"
                name="email"
                onChange={handleChange}
                value={login.email}
                placeholder="Correo electrónico"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">{props.password}</label>
              <input
                type="password"
                className="input-field"
                name="password"
                onChange={handleChange}
                value={login.password}
                placeholder="Contraseña"
              />
            </div>
            <button className="submit-button" onClick={onSubmit}>
              Enviar
            </button>
            <div className="error-message">{msgError}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={() => navigate("/")}>{props.buttonBack}</button>
        </Col>
      </Row>
    </>
  );
};
