import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getProducts();
  }, []);

  return (
    <div className="container">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Home;
