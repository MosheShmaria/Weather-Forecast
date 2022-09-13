import { useState, createContext } from "react";

export const LocationContext = createContext();

export default function LocationsList({ children }) {
  const [locations, setList] = useState(
    JSON.parse(localStorage.locations || null) || []
  );

  function save(newList) {
    localStorage.locations = JSON.stringify(newList);
    setList(newList);
  }
  function newLocation(location) {
    save([...locations, location]);
  }

  function deleteLocation(nameToDelete) {
    save(locations.filter((l) => l.name !== nameToDelete));
  }

  return (
    <LocationContext.Provider
      value={{ locations, newLocation, deleteLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
}
