import React from "react";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

const AppBar = ({ handleChangePage }) => {
  const { userLoggedIn } = useAuth();
  const handleLogout = () => {
    doSignOut();
    handleChangePage(2);
  }

  const handleCreateVote = () => {
   
    handleChangePage(4);
  }
  return (
    <nav>
      <h3 onClick={() => handleChangePage(1)}>TrueChoice</h3>
      {}
      {!userLoggedIn && (
        <div>
          <button onClick={() => handleChangePage(2)} className="nav-button">
            Login
          </button>
          <button onClick={() => handleChangePage(3)} className="nav-button">
            Sign Up
          </button>
        </div>
      )}
      {userLoggedIn && (
        <div>

          <button onClick={handleLogout} className="nav-button">
            Logout
          </button>
          <button onClick={handleCreateVote} className="nav-button">
            Create Poll
          </button>
        </div>
        
      )}
    </nav>
  );
};

export default AppBar;
