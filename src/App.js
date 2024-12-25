import { useState } from "react";
import ItemList from "./components/itemList";

const items=[
  {label: 'Item 1',votes: 0},
  {label: 'Item 2',votes: 0},
  {label: 'Item 3',votes: 0},
  {label: 'Item 4',votes: 0},
]
function App() {
  const [itemsArray, setItemsArray] = useState(items);
  const [voted, setVoted] = useState(false);
  
  const handleVote = (item) => {
    console.log(item)
   setItemsArray(itemsArray.map((itemObj)=>
    itemObj.label===item.label?{...itemObj,votes:itemObj.votes+1}:itemObj
   ))
   setVoted(true);
 
  }
  return (
   <main>
    <h1>Items</h1>
    <ItemList handleVote={handleVote} items={itemsArray} voted={voted}/>
   </main>
  );
}

export default App;
