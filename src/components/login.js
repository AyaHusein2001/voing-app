import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import { useAuth } from "../contexts/authContext";

const LogIn = ({handleChangePage}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    await doSignInWithEmailAndPassword(email, password);
    handleChangePage(1);
  };
  return (
    <section className="form">
      <div className="flex-col">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email"
        />
      </div>
      <div className="flex-col">
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
        />
      </div>
      <button className="vote-button" onClick={() => handleSignIn()}>Sign In</button>
    </section>
  );
};

export default LogIn;
