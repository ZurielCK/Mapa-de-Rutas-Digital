import { createContext, useState, useContext } from "react";

const MapContext = createContext();

export const useMapContext = () => useContext(MapContext);

export const MapProvider = ({ children }) => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  return (
    
    <MapContext.Provider value={{ origin, setOrigin, destination, setDestination }}>
      {children}
    </MapContext.Provider>
  );
};