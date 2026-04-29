import { useState } from "react";
import "./App.css";

export default function App() {
  // 1. Form ke liye simple states (alag alag)
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  // 2. Cards list
  const [cards, setCards] = useState([]);

  // 3. Form submit
  function handleSubmit(e) {
    e.preventDefault();

    // agar name ya job empty ho → stop
    if (name === "" || job === "") return;

    // new card object
    const newCard = {
      name,
      job,
      bio,
      image,
    };

    // cards me add karo
    setCards([...cards, newCard]);

    // form reset
    setName("");
    setJob("");
    setBio("");
    setImage("");
  }

  return (
    <div className="app">
      <h2>Profile Card Generator</h2>

      {/* FORM */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Job Title"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          placeholder="Short Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button type="submit">Create Card</button>
      </form>

      {/* CARDS */}
      <div className="cardContainer">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={card.image || "https://via.placeholder.com/150"}
              alt="profile"
            />

            <h3>{card.name}</h3>
            <p className="job">{card.job}</p>
            <p>{card.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}