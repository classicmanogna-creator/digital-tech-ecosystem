import { useContext } from "react";
import { AppContext } from "../context/appContext";
import "./contact.css";

const Contact = () => {
  const {
    cart,
    removeFromCart,
    getTotal,
    buyNowItems,
    removeBuyNow,
    getBuyNowTotal
  } = useContext(AppContext);

  return (
    <div className="contact">
      <h2>Order Summary</h2>

      {/* ✅ BUY NOW MULTIPLE ITEMS */}
      {buyNowItems.length > 0 ? (
        <>
          {buyNowItems.map((item) => (
            <div className="product-info" key={item.id}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button onClick={() => removeBuyNow(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{getBuyNowTotal()}</h3>
        </>
      ) : (
            <p>No items selected</p>
          ) }

      <div className="contact-box">
        <p><strong>Email:</strong> support@techecosystem.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Address:</strong> Vijayawada, India</p>
      </div>
    </div>
  );
};

export default Contact;