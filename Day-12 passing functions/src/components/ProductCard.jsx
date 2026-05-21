import React from "react";
import Button from "./Button";

function ProductCard({ onAdd }) {
  return (
    <div className="card">
      <h3>iPhone 15</h3>
      <p>Price: 250000 PKR</p>

      {/* 👇 child function ko call kar raha hai */}
      <Button onAdd={onAdd}>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;