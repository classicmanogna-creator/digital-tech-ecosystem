import { useState, useEffect } from "react";
import products from "../data/product";
import ProductCard from "../components/productCard";
import SearchBar from "../components/searchBar";
import Loader from "../components/loader";
import "./marketPlace.css";

const Marketplace = () => {
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFiltered(products);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (q) => {
    setFiltered(
      products.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase())
      )
    );
  };

  return (
    <div className="market">
      <h2>Marketplace</h2>
          
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;