import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./FooterStyle.scss";

const FooterComp = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  /* REACT LOGIC */

  const fetchWeatherData = async () => {
    const apiKey = "4279ffd4399f9edfd0a57d37c0a34693";
    const city = "Alicante";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  /* LOGIC REACT  */

  return (
    <footer className="footer">
      <div className="weather">
        {weatherData && (
          <p>
            {weatherData.name} - {Math.round(weatherData.main.temp)}°C with{" "}
            {weatherData.weather[0].description}
          </p>
        )}
      </div>
      <div className="footer-content">
        <p>&copy; 2023 Mi Landing Page. Todos los derechos reservados.</p>
      </div>
      <div>
        <a href={"/login"}>{props.a}</a>
      </div>
    </footer>
  );
};

export default FooterComp;
