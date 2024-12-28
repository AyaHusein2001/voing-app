import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { Timestamp, addDoc, collection } from "../firebase/firebase";
import { useAuth } from "../contexts/authContext";
const CreateVote = ({ handleChangePage }) => {
  const { currentUser } = useAuth();
  const [options, setOptions] = useState([
    { label: "", votes: 0 },
    { label: "", votes: 0 },
  ]);
  const [title, setTitle] = useState("");

  const handleCreateVote = async () => {
    if (!title || !options.some((option) => !option.label.trim())) {
      console.log("error");
    }
    const pollData = {
      createdAt: Timestamp.now(),
      createdBy: currentUser?.email,
      options,
      title,
    };
    try {
      const docRef = await addDoc(collection(db, "polls"), pollData);
      alert("Poll created successfully!");
      handleChangePage(1);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to create poll. Please try again.");
    }
  };
  const handleOptionChanged = (index, value) => {
    setOptions(
      options.map((option, i) =>
        i === index ? { ...option, label: value } : option
      )
    );
  };
  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };
  const addOption = () => {
    setOptions([...options, { label: "", votes: 0 }]);
  };
  return (
    <section className="form">
      <div className="flex-col">
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          required
          type="text"
          placeholder="vote title"
        />
      </div>
      <div className='options-section'>

      <p>Options</p>
      <div id="options">
        {options.map((option, index) => (
          <div key={index} className="option-li">
            <input
              required
              value={option.label}
              name={`option${index}`}
              type="text"
              placeholder={`option ${index + 1}`}
              onChange={(e) => handleOptionChanged(index, e.target.value)}
            />
            <div className='actions'>
            <button className="plus-minus-button plus" disabled={index === 0} onClick={addOption}>
              +
            </button>
            <button
            className="plus-minus-button minus"
              disabled={index < 2}
              onClick={() => handleRemoveOption(index)}
            >
              -
            </button>
            </div>
           
          </div>
        ))}
      </div>
      </div>

      <button className="vote-button" onClick={handleCreateVote}>Create Poll</button>
    
    </section>
  );
};

export default CreateVote;
