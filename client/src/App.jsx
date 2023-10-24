import { AppRoutes } from "./routes/AppRoutes";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#002c6a",
          colorBgBase: "#f8d99b",
        },
      }}
    >
      <I18nextProvider i18n={i18n}>
        <AppRoutes />
      </I18nextProvider>
    </ConfigProvider>
  );
}

export default App;
