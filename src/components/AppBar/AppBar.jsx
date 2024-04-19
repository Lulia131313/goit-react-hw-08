import { Link, NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slise";
import { logoutThunk } from "../../redux/auth/operations";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";

const AppBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.header}>
      <Link to="/">Home</Link>
      <p>Welcome {user.email}</p>

      {isLoggedIn ? <Navigation /> : <AuthNav />}

      {isLoggedIn && (
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      )}
    </div>
  );
};

export default AppBar;
