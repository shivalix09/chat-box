import { getToken } from "../../Helper";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const location = useLocation();
 const navigate = useNavigate();

  return retuenComponent(children, location, navigate);
};
const retuenComponent = (children, location) => {
  const token = getToken();

  if (token) {
    if (location.pathname === "/login") {
      return <Navigate to="/chatScreen" state={{ from: location }} replace />;
    } else {
      return children;
    }
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
export default Auth;
