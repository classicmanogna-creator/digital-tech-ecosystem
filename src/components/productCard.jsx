import { useContext } from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, addBuyNow } = useContext(AppContext);
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 1000);
  };
  return (
    <div className="card">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="card-img" />

      {/* Product Info */}
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <p className="category">{product.category}</p>

      {/* Buttons */}
      <div className="btn-group">
        <button onClick={handleAddToCart}>
          {added ? (<span className="added-text">
    ✔ Added
  </span>) : ("Add to cart")}
        </button>

        <button
          className="buy-btn"
          onClick={() => { 
            addBuyNow(product);
            navigate("/contact");      // ✅ Then go to contact
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;