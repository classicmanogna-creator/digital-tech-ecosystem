import { useContext } from "react";
import { AppContext } from "../context/appContext";
import "./dashBoard.css";

const Dashboard = () => {
  const { cart, posts, rentals } = useContext(AppContext);

  return (
    <div className="dash-container">
    <div className="dash">
      <h2>Dashboard</h2>
      <p>Cart: {cart.length}</p>
      <p>Posts: {posts.length}</p>
      <p>Rentals: {rentals.length}</p>
    </div>
    </div>
  );
};

export default Dashboard;