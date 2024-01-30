// MyContextProvider.js

import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";

// Create the context
export const UserLocationContext = createContext([
  (location) => {},
  (setLocation) => {},
]);

// Create the provider component
const MyContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};

export { MyContextProvider };
