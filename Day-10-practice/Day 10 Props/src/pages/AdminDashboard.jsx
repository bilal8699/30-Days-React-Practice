import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async () => {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", price: "", image: "" });
    getProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });

    getProducts();
  };

  const updateProduct = async () => {
    await fetch(`http://localhost:5000/products/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", price: "", image: "" });
    setEditId(null);
    getProducts();
  };

  return (
    <div className="admin-container">
      <h1 className="title">⚡ Admin Dashboard</h1>
      <p className="subtitle">Manage your products easily</p>

      {/* FORM */}
      <div className="form-card">
        <input
          placeholder="Product Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        {editId ? (
          <button onClick={updateProduct}>✏ Update Product</button>
        ) : (
          <button onClick={addProduct}>➕ Add Product</button>
        )}
      </div>

      {/* PRODUCTS */}
      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h2>{p.title}</h2>
            <p>Rs {p.price}</p>

            <button
              onClick={() => {
                setForm({
                  title: p.title,
                  price: p.price,
                  image: p.image,
                });
                setEditId(p.id);
              }}
            >
              ✏ Edit
            </button>

            <button onClick={() => deleteProduct(p.id)}>
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;