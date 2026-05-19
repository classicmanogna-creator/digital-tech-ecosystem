import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [posts, setPosts] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [buyNowItems, setBuyNowItems] = useState([]); // ✅ NEW

  // 🔄 LOAD DATA FROM LOCALSTORAGE
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const storedRentals = JSON.parse(localStorage.getItem("rentals")) || [];
    const storedBuyNow = JSON.parse(localStorage.getItem("buyNow")) || [];

    if (storedUser) setUser(storedUser);
    setCart(storedCart);
    setPosts(storedPosts);
    setRentals(storedRentals);
    setBuyNowItems(storedBuyNow);
  }, []);

  // 💾 SAVE DATA
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("rentals", JSON.stringify(rentals));
  }, [rentals]);

  useEffect(() => {
    localStorage.setItem("buyNow", JSON.stringify(buyNowItems));
  }, [buyNowItems]);

  // 🔐 LOGIN
  const login = (email, password) => {
    const stored = JSON.parse(localStorage.getItem("user"));

    if (!stored) {
      alert("No account found. Please register first.");
      return false;
    }

    if (stored.email === email && stored.password === password) {
      setUser(stored);
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  // 📝 REGISTER
  const register = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data); // auto login
  };

  // 🚪 LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // 🛒 CART FUNCTIONS
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // ⚡ BUY NOW FUNCTIONS (MULTIPLE ITEMS)
  const addBuyNow = (product) => {
    setBuyNowItems((prev) => [...prev, product]);
  };

  const removeBuyNow = (id) => {
    setBuyNowItems((prev) => prev.filter(item => item.id !== id));
  };

  const getBuyNowTotal = () => {
    return buyNowItems.reduce((total, item) => total + item.price, 0);
  };

  const clearBuyNow = () => {
    setBuyNowItems([]);
  };

  // 💬 POSTS
  const addPost = (text) => {
    setPosts((prev) => [...prev, text]);
  };

  const removePost = (index) => {
  setPosts((prev) => prev.filter((_, i) => i !== index));
};

const clearPosts = () => {
  setPosts([]);
};

  // 💻 RENTALS
  const addRental = (item) => {
    setRentals((prev) => [...prev, item]);
  };

  const removeRental = (id) => {
    setRentals((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        cart,
        posts,
        rentals,
        buyNowItems,

        login,
        register,
        logout,

        addToCart,
        removeFromCart,
        getTotal,

        addBuyNow,
        removeBuyNow,
        getBuyNowTotal,
        clearBuyNow,

        addPost,
        removePost,
        clearPosts,
        addRental,
        removeRental
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;