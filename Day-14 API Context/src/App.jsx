import Navbar from "./Navbar";
import Profile from "./Profile";
import UserProvider from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Profile />
    </UserProvider>
  );
}

export default App;