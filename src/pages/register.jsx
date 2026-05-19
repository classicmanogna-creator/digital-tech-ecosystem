import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import { AppContext } from "../context/appContext";
import "./register.css";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();   // ✅ ADD THIS

  const [data, setData] = useState({});

  const handleRegister = () => {
    register(data);       // save user
    navigate("/");        // ✅ go to home page
  };

  return (
    <div className="auth">
      <h2>Register</h2>
      <div>
      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      </div>

      <div>
      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      </div>

      <div>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      </div>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;