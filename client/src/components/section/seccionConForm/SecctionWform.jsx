import { useTranslation } from "react-i18next";
import { FormComp } from "../../forms/FormComp";
import "./SecctionWformStyle.scss";

export const SecctionWform = (props) => {
  const { t } = useTranslation();
  return (
    <section className="contact-secction" style={{ height: "78vh", margin: 0 }}>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <FormComp
        title={t("secctionWform.form.title")}
        labelName={t("secctionWform.form.labelName")}
        labelEmail={t("secctionWform.form.labelEmail")}
        labelTel={t("secctionWform.form.labelTel")}
        labelTextarea={t("secctionWform.form.labelTextarea")}
        buttonText={t("secctionWform.form.buttonText")}
      />
    </section>
  );
};
