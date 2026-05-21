import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <Card>
        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
        <h3>iPhone 15</h3>
        <p>Price: 250000 PKR</p>
      <Button>Add to Cart</Button>
      </Card>

      <Card>
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" />
        <h3>Headphones</h3>
        <p>Price: 8000 PKR</p>
        <Button>Add to Cart</Button>
      </Card>
    </div>
  );
}

export default App;
