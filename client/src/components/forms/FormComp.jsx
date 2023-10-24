import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FormCompStyle.scss";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const FormComp = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /*REACT LOGIC */
  const [customer, setCustomer] = useState(initialValues);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/customer/addInfo", customer)
      .then((res) => {
        setCustomer(res.data);
        setFormSubmitted(true);
        setFormValues(initialValues);
        navigate("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*REACT LOGIC */

  return (
    <form className="contact-form">
      {formSubmitted ? (
        <p>
          Formulario Enviado, Nos pondremos en contacto contigo. Muchas gracias
        </p>
      ) : (
        <>
          <h2 className="form-title">{props.title}</h2>
          <div className="form-group">
            <label htmlFor="name">{props.labelName}:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customer.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{props.labelEmail}:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{props.labelTel}:</label>
            <input
              type="tel"
              id="phone"
              value={customer.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{props.labelTextarea}:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={customer.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button onClick={onSubmit} type="submit" className="submit-button">
            {props.buttonText}
          </button>
        </>
      )}
    </form>
  );
};
