import { useContext } from "react";
import { AppContext } from "../context/appContext";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useContext(AppContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Cart Total: ₹{getTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;