import React, { useEffect, useState } from "react";
import Item from "./item";
import {
  db,
  collection,
  getDocs,
  doc,
  updateDoc,
  increment,getDoc
} from "../firebase/firebase";
const ItemList = () => {
  const [items, setItems] = useState([]);
  const [voted, setVoted] = useState(false);

  const handleVote = async (pollId, optionIndex) => {

    try {
      
      const pollRef = doc(db, "polls", pollId);
      const pollSnapshot = await getDoc(pollRef);
      if (!pollSnapshot.exists()) {
        console.error("Poll not found!");
        return;
      }

      const pollData = pollSnapshot.data();
      const updatedOptions = [...pollData.options];
      updatedOptions[optionIndex].votes += 1;
  
      await updateDoc(pollRef, {
        options: updatedOptions,
      });

      setVoted(true);
  
    } catch (error) {
      console.error("Error while recording vote:", error);
    }
  };
  
  const fetchItems = async () => {
    console.log("fetching items");
    try {
      const itemsCollection = collection(db, "polls");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsList);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <ul className="poll">
      {items.map((item) => (
        <Item
          key={item.options[0].label}
          handleVote={handleVote}
          item={item}
          voted={voted}
        />
      ))}
    </ul>
  );
};

export default ItemList;
