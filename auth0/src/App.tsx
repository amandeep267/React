import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated && user !== undefined ? (
    <>
      {" "}
      <LogoutButton />
      <Profile />
    </>
  ) : (
    <LoginButton />
  );
}

export default App;
