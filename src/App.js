import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ListManagement from "./pages/ListManagement";
import TheForecast from "./pages/TheForecast";
import LocationsList from "./LocationsList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
        <Header />
        <LocationsList>
          <Routes>
            <Route path="/" element={<ListManagement />}></Route>
            <Route path="/forecast" exact element={<TheForecast />}></Route>
          </Routes>
        </LocationsList>
      </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
