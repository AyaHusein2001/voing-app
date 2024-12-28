import React from "react";
import SignUp from "../components/signup";


const SignUpPage = ({ handleChangePage }) => {
  return (
    <div className='photo-form'>
    <img width={800} height={500} src="/signup.png" />
      <SignUp handleChangePage={handleChangePage} />
    </div>
  );
};

export default SignUpPage;
