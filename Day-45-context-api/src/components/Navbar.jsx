import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);

  return <h2>Welcome, {user}</h2>;
};

export default Navbar;