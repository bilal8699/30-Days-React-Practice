const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// DB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bilal56311mysql7172B4a",
  database: "ecommerce",
});

// GET all products
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ADD product
app.post("/products", (req, res) => {
  const { title, price, image } = req.body;

  const sql = "INSERT INTO products (title, price, image) VALUES (?, ?, ?)";
  db.query(sql, [title, price, image], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product added", result });
  });
});

// UPDATE product
app.put("/products/:id", (req, res) => {
  const { title, price, image } = req.body;
  const { id } = req.params;

  const sql =
    "UPDATE products SET title=?, price=?, image=? WHERE id=?";

  db.query(sql, [title, price, image, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product updated" });
  });
});

// DELETE product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Product deleted" });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});