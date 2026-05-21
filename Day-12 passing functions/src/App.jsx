import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [cart, setCart] = useState(0);

  // 👇 function parent me bana
  const addToCart = () => {
    setCart(cart + 1);
    console.log("Item added to cart");
  };

  return (
    <div>
      <h2>Cart Items: {cart}</h2>

      {/* 👇 function child ko pass ki */}
      <ProductCard onAdd={addToCart} />
    </div>
  );
}

export default App;