import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/slise";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(location);
  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to={location.state?.from || "/"} />;
};

export default PublicRoute;
