import React from "react";
import { useAuth } from "../contexts/authContext";

const Item = ({ item, handleVote, voted }) => {
  const { userLoggedIn } = useAuth();
  return (
    <li className="vote">
      <h2> {item.title}</h2>
      <ul className="options">
        {item.options.map((option, index) => {
          return (
            <li className="option-li">
              <p>{option.label}</p>
              {!voted && userLoggedIn && (
                <button
                  className="vote-button"
                  onClick={() => handleVote(item.id, index)}
                >
                  Vote
                </button>
              )}
              {voted && <p className="vote-number">Votes: {option.votes}</p>}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Item;
