import { createContext, useState } from "react";

// Context create
export const UserContext = createContext();

function UserProvider({ children }) {
  const [name, setName] = useState("Bilal");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;