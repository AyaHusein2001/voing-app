import React from "react";
import AppBar from "./components/appBar";
import Home from "./pages/home";
import { AuthProvider } from "./contexts/authContext";
function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
