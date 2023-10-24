import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Divider } from "antd"; // Importa los componentes de Typography y Divider de Ant Design

const { Title, Paragraph } = Typography;

export const TextComp = (props) => {
  const { t } = useTranslation();

  return (
    <section style={{ textAlign: "center", padding: "24px" }}>
      <Title level={2}>
        {props.title}
        {props.pseudo}
      </Title>
      <Divider />
      <div className="texto-estilizado">
        <Paragraph>{props.content}</Paragraph>
      </div>
    </section>
  );
};
