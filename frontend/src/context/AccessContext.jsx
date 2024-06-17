import { createContext, useContext, useState } from "react";

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [accessGranted, setAccessGranted] = useState(false);

  return (
    <AccessContext.Provider value={{ accessGranted, setAccessGranted }}>
      {children}
    </AccessContext.Provider>
  );
};

// Custom hook to use the AccessContext
export const useAccess = () => useContext(AccessContext);
