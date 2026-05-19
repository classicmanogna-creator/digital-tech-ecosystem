import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { useContext } from "react";
import { AppContext } from "./context/appContext";
import { Navigate } from "react-router-dom";
import "./App.css"

import Home from "./pages/home";
import Marketplace from "./pages/marketPlace";
import Notes from "./pages/Notes";
import Repair from "./pages/repair";
import Rental from "./pages/rental";
import Dashboard from "./pages/dashBoard";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import About from './pages/about';
import Footer from './components/footer'
import Contact from "./pages/contact";
import Cart from "./pages/cart";
function App() {
  const { user } = useContext(AppContext);
  return (
    <BrowserRouter>
      <div className="app-container">   {/* ✅ ADD THIS */}

        <Navbar />

        <div className="main-content">  {/* ✅ IMPORTANT */}
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/register" />}/>
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
            <Route path="/marketplace" element={user ? <Marketplace /> : <Navigate to="/register" />} />
            <Route path="/Notes" element={user ? <Notes /> : <Navigate to="/register" />} />
            <Route path="/about" element={user ? <About /> : <Navigate to="/register" />} />
            <Route path="/repair" element={user ? <Repair /> : <Navigate to="/register" />} />
            <Route path="/rental" element={user ? <Rental /> : <Navigate to="/register" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/register" />} />
            <Route path="/cart" element={user ? <Cart /> : <Navigate to="/register" />} />
            <Route path="/contact" element={user ? <Contact /> : <Navigate to="/register" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/register" />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;