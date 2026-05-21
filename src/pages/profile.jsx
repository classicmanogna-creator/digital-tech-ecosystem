import { useContext } from "react";
import { AppContext } from "../context/appContext";
import "./profile.css";

const Profile = () => {
  const { user, logout } = useContext(AppContext);

  if (!user) return <h2>Please register</h2>;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;