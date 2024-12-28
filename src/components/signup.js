import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { useAuth } from "../contexts/authContext";

const SignUp = ({ handleChangePage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("🚀 ~ handleSignUp ~ error:", error);
    }
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
      <button className="vote-button" onClick={() => handleSignUp()}>Create Account</button>
    </section>
  );
};

export default SignUp;
