import { useContext, useState } from "react";
import { AppContext } from "../context/appContext";
import "./rental.css";

const rentalProducts = [
  {
    id: 1,
    name: "Dell Gaming Laptop",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
  },
  {
    id: 2,
    name: "HP Pavilion",
    price: 2200,
    image: "https://m.media-amazon.com/images/I/618zAXbM4uL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 3,
    name: "Lenovo IdeaPad",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1500_.jpg",      
  },
  {
    id: 4,                    
    name: "ASUS Chromebook",
    price: 2000,
    image: "https://m.media-amazon.com/images/I/61d+uhYgdNL._AC_UY327_FMwebp_QL65_.jpg",
  },
  {
    id: 5,                    
    name: "Dell 15 (Previously Inspiron) Laptop",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/717WZ7WriwL._SX679_.jpg",
  },
  {
    id: 6,                    
    name: "Dell 15 (Previously Inspiron) Laptop",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/717WZ7WriwL._SX679_.jpg",
  },
  {
    id: 7,                    
    name: "Monopod Grip Tripod Foldable Selfie Stick",
    price: 300,
    image: "https://m.media-amazon.com/images/I/51ExnRIRpqL._SX679_.jpg",
  },
  {
    id: 8,                    
    name: "Kadence K222 Home Series Wired Mini Mic",
    price: 300,
    image: "https://m.media-amazon.com/images/I/51LKXfZJoeL._SX522_.jpg",
  },
  {
    id: 9,                    
    name: "MP Mirrorless Camera (Black)",
    price: 2000,
    image: "https://m.media-amazon.com/images/I/81Tib6mb8eL._SX522_.jpg",
  },
  {
    id: 10,                    
    name: "Aluminum Tripod (133 cm)",
    price: 500,
    image: "https://m.media-amazon.com/images/I/61H1dMNTSnL._SX679_.jpg",
  },
  {
    id: 11,                    
    name: "Over Ear Wired Gaming Headset",
    price: 500,
    image: "https://m.media-amazon.com/images/I/516HwNOJoUL._SX569_.jpg",
  },
   {
    id: 12,                    
    name: "Zebronics ZEB-KM2100 Multimedia USB Keyboard",
    price: 100,
    image: "https://m.media-amazon.com/images/I/71E0VC4P5KL._SX679_.jpg",
  },
  {
    id: 13,                    
    name: "Zebronics Wireless Mouse",
    price: 100,
    image: "https://m.media-amazon.com/images/I/51y8A5WKZ+L._SX679_.jpg",
  },
  {
    id: 14,                    
    name: "Amazon Basics USB Gamepad",
    price: 400,
    image: "https://m.media-amazon.com/images/I/61NI-pV-L+L._SL1500_.jpg",
  },
  {
    id: 15,                    
    name: "Adjustable 360° Rotating Laptop Stand",
    price: 400,
    image: "https://m.media-amazon.com/images/I/51vQ57US8oL._SX522_.jpg",
  },
  {
    id: 16,                    
    name: "HP 65W AC Blue Pin Laptops Charger",
    price: 600,
    image: "https://m.media-amazon.com/images/I/61B00ToZvmL._SX522_.jpg",
  },
  {
    id: 17,                    
    name: "Orei Universal Charger Adapter",
    price: 350,
    image: "https://m.media-amazon.com/images/I/61U+CoP2IJL._SX522_.jpg",
  },
  {
    id: 18,                    
    name: " Stylus Pen for Touch Screen Devices",
    price: 450,
    image: "https://m.media-amazon.com/images/I/51DMK7ZUicL._SX522_.jpg",
  },
];


const Rental = () => {
  const { addRental, removeRental } = useContext(AppContext);

  const [addedId, setAddedId] = useState(null);
  const [counts, setCounts] = useState({});

  const addingRental = (item) => {
    addRental(item);

    // update count per item
    setCounts((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));

    // show tick only for that item
    setAddedId(item.id);

    setTimeout(() => setAddedId(null), 1000);
  };
  const onDeleting = (item) => {
  removeRental(item.id);

  setCounts((prev) => ({
    ...prev,
    [item.id]: Math.max((prev[item.id] || 1) - 1, 0),
  }));
};

  return (
    <div className="rental">
      <h2>Rent Laptops</h2>

      <div className="rental-grid">
        {rentalProducts.map((item) => (
          <div className="rental-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price} / day</p>

            <p>Count: {counts[item.id] || 0}</p>

            {addedId === item.id ? (
              <span className="added-text">✔ Added</span>
            ) : (
              <>
              <button onClick={() => addingRental(item)} className="button1">
                Rent Now
              </button>
              <button onClick={() => onDeleting(item)} className="button2"> Delete </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rental;