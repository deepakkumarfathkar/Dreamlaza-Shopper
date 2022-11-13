import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UAuthContext } from "../Context/UAuthContext";

function PrivateRouteU({ children }) {
  const { authState } = useContext(UAuthContext);
  if (!authState.isAuth) {
    return <Navigate to="/userlogin" />;
  }
  return children;
}

export default PrivateRouteU;