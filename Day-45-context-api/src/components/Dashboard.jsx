import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { setUser } = useContext(AppContext);

  return (
    <button onClick={() => setUser("Vishu")}>
      Login as Vishu
    </button>
  );
};

export default Dashboard;