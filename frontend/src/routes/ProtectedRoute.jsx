import { Navigate } from "react-router-dom";
import { useAccess } from "../context/AccessContext";

const ProtectedRoute = ({ element: Component }) => {
  const { accessGranted } = useAccess();

  return accessGranted ? Component : <Navigate to="/category" />;
};

export default ProtectedRoute;
