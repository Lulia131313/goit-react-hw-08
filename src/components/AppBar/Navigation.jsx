import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
