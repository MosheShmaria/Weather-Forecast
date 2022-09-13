import { React } from "react";
import "./SelecetLocations.css";
import { ListGroup, Badge, Container, Button } from "react-bootstrap";
import { BsFillXCircleFill } from "react-icons/bs";

import { useContext } from "react";
import { LocationContext } from "../LocationsList";

const SelectLocations = ({ editable, activeLocation, setActiveLocation,getData }) => {
  const { locations, deleteLocation } = useContext(LocationContext);
  function onItemClick(item) {
    if (!editable) setActiveLocation(item);
  }
  return (
    <>
      <Container
        key={locations.length}
        className="bg-light border border-1 p-3 w-75  m-1"
      >
        <h1 className="ListTitle fw-bold">Locations:</h1>
        {!locations.length ? (
          <div>(No locations yet...)</div>
        ) : (
          <ListGroup as="ol" >
            {locations.map((item) => (
              <ListGroup.Item
                onClick={() => onItemClick(item)}
                key={item.name}
                as="li"
                className={`d-flex justify-content-between align-items-start ${
                  activeLocation?.name === item.name ? "activeItem" : ""
                }`}
              >
                <div className="ms-2 me-auto">{item.name}</div>
                {editable ? (
                  <div
                    onClick={() => deleteLocation(item.name)}
                    className="delete"
                  >
                    <Badge bg="danger" pill>
                      <BsFillXCircleFill />
                    </Badge>
                  </div>
                ) : null}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Container>
      {locations ? (
        <Button className="ShowButton" variant="primary" onClick={getData}>
          Show Forecast
        </Button>
      ) : null}
    </>
  );
};

export default SelectLocations;
