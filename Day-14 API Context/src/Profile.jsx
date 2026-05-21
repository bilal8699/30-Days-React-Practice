import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const data = useContext(UserContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>

      <h2>Name: {data.name}</h2>

      <button onClick={() => data.setName("Ali")}>
        Change Name
      </button>
    </div>
  );
}

export default Profile;