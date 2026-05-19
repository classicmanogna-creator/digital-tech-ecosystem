import "./home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Home = () => {
  const navigate = useNavigate();
   useEffect(() => {
    document.title = "Digital Tech Ecosystem";
    }, []);
  return (
    <>
    <div className="home">

      {/* 🔥 HERO BANNER */}
      <div className="banner">
        <img
          src="https://i.pinimg.com/736x/30/62/d6/3062d6dabb11bf609665815aee8cd698.jpg"
          alt="banner"
        />
      </div>
      <button className="get-started-btn" onClick={() =>
            navigate("/marketplace", { state: {} })
          }> Get Started </button>

    </div>
    </>
  );
};

export default Home;