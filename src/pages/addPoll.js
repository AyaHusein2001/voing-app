import React from "react";
import CreateVote from "../components/createVote";

const AddPoll = ({ handleChangePage }) => {
  return (
    <div className='photo-form'>
    <img src="/poll.png" />
      <CreateVote handleChangePage={handleChangePage} />
    </div>
  );
};

export default AddPoll;
