import { useContext } from "react";
import { UserContext } from "./UserContext";

function Navbar() {
  const data = useContext(UserContext);

  return (
    <div style={{ background: "black", color: "white", padding: "20px" }}>
      <h2>Navbar</h2>

      <h3>User: {data.name}</h3>
    </div>
  );
}

export default Navbar;