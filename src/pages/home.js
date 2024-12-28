import React from "react";
import { useState } from "react";

import AppBar from "../components/appBar";
import ItemList from "../components/itemList";
import LogIn from "../components/login";
import SignUp from "../components/signup";
import CreateVote from "../components/createVote";
import AddPoll from "./addPoll";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
const Home = () => {
  

  const [page, setPage] = useState(1);
  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <AppBar handleChangePage={handleChangePage} ></AppBar>
      <main>
        {page === 1 && <ItemList  />}
        {page === 2 && <LoginPage handleChangePage={handleChangePage} />}
        {page === 3 && <SignUpPage handleChangePage={handleChangePage} />}
        {page === 4 && <AddPoll handleChangePage={handleChangePage} />}

      </main>
    </>
  );
};

export default Home;
