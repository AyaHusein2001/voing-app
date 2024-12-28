import React from "react";

import LogIn from "../components/login";

const LoginPage = ({ handleChangePage }) => {
  return (
    <div className='photo-form'>
    <img src="/login.png" />
      <LogIn handleChangePage={handleChangePage} />
    </div>
  );
};

export default LoginPage;
