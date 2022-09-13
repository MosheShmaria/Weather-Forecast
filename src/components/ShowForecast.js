
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import "./ShowForecast.css";
import Loader from "./Loader";

const ShowForecast = ({ activeLocation, todayWeather, loading }) => {
  if (loading) return <Loader className="loader" />;

  if (!todayWeather.weather)
    return (
      <Container className="bg-light border border-1 p-3  m-1 forecast-text">
        <h1 className="ListTitle fw-bold">Forecast:</h1>
        <Image
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpk3gvfYYdU2woqrGxmnL_cW7xe0eSVQr71iqZrdVcVaA00IeS6zD6VqNB7EIAjwff9Q&usqp=CAU"
        />
      </Container>
    );

  return (
    <Container className="forecast-text">
      <h5>Forecast: {activeLocation.name}</h5>
      <Image className="img" src={todayWeather.imageUrl} />
      <div className="card">
        <div className="card-header">
          <div className="card-title">{new Date().toUTCString()}</div>
        </div>
        <div className="card-body">
          <p className="card-text">
            <label>Weater: </label>
            <span>{todayWeather.weather}</span>
          </p>
          <p className="card-text">
            <label>Temperatures:</label>
            <span>
              {todayWeather.temp2m?.min}°C to {todayWeather.temp2m?.max}°C
            </span>
          </p>
          <p className="card-text">
            <label>Wind conditions: </label>
            <span>{todayWeather.wind10m_max}m/s</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ShowForecast;
