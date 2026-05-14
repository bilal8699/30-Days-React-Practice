import React from "react";

const ProductCard = ({image, title, price, }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Rs {price}</p>

      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;
