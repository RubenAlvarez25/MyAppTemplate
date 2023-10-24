import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./FinderStyle.scss";
import axios from "axios";

export const FinderComp = ({ onSearch, onReset }) => {
  const { t } = useTranslation();
  /* REACT LOGIC */
  const [product, setProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRooms, setSelectedRooms] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/getAllProduct")
      .then((res) => {
        setProduct(res.data);
        console.log("res.dataa", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = () => {
    const filteredData = product.filter((item) => {
      const nameMatch =
        searchInput === "" ||
        item.title.toLowerCase().includes(searchInput.toLowerCase());

      const roomsMatch =
        (selectedRooms === "1" &&
          item.featureTwo >= 1 &&
          item.featureTwo <= 3) ||
        (selectedRooms === "2" &&
          item.featureTwo >= 4 &&
          item.featureTwo <= 8) ||
        selectedRooms === "";

      const priceMatch =
        (selectedPriceRange === "1" && item.price < 1000000) ||
        (selectedPriceRange === "2" && item.price >= 1000000) ||
        selectedPriceRange === "";

      return nameMatch && roomsMatch && priceMatch;
    });

    onSearch(filteredData);
  };
  const handleReset = () => {
    onReset();
  };
  /* LOGIC REACT  */

  return (
    <div className="filters">
      <div>
        <h2>{t("finder.title")}</h2>
      </div>
      <input
        type="text"
        placeholder={t("finder.features.text")}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{
          padding: "8px",
          margin: "2%",
          marginRight: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          width: "200px",
        }}
      />
      <select
        value={selectedRooms}
        onChange={(e) => setSelectedRooms(e.target.value)}
        style={{
          padding: "8px",
          margin: "2%",
          marginRight: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <option value="">{t("finder.features.opt1")}</option>
        <option value="1">1-3</option>
        <option value="2">4-8</option>
      </select>
      <select
        value={selectedPriceRange}
        onChange={(e) => setSelectedPriceRange(e.target.value)}
        style={{
          padding: "8px",
          margin: "2%",
          marginRight: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <option value="">{t("finder.features.opt2")}</option>
        <option value="1">Menos de 1M</option>
        <option value="2">Mas de 1M </option>
      </select>
      <hr />
      <div style={{ marginTop: "2%" }}>
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Buscar
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: "8px 16px",
            margin: "2%",
            backgroundColor: "#dc3545",
            color: "#fff",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Borrar filtros
        </button>
      </div>
    </div>
  );
};
