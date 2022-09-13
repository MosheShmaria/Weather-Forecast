import SelecetLocations from "../components/SelecetLocations";
import ShowForecast from "../components/ShowForecast";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState } from "react";
import './TheForecast.css'

const TheForecast = () => {
  const [activeLocation, setActiveLocation] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoadin] = useState();

  async function getData() {
    setLoadin(true);
    const url = `https://www.7timer.info/bin/api.pl?lon=${activeLocation.longitude}&lat=${activeLocation.latitude}&product=civillight&output=json`;
    const res = await axios.get(url);
    const d = res.data.dataseries[0]
    d.imageUrl = `https://www.7timer.info/bin/astro.php?%20lon=${activeLocation.longitude}&lat=${activeLocation.latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;
    setData(d);
    setLoadin(false);
  }

  return (
    <Container className="container">
      <ShowForecast activeLocation={activeLocation} todayWeather={data} loading={loading} />
      <SelecetLocations 
        setActiveLocation={setActiveLocation}
        activeLocation={activeLocation}
        getData={getData}
      />
      { activeLocation.latitude ? (
      <div className="bg-light border border-1 p-3  m-1 w">
        <h6>{activeLocation.name}</h6>
        <span className="fs-7">
          {activeLocation.latitude},{activeLocation.longitude}
        </span>
      </div> ) : null }
    </Container>
  );
};

export default TheForecast;
