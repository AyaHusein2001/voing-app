import React from 'react'
import Item from './item'

const ItemList = ({items,handleVote,voted}) => {
  return (
    <ul>
      {items.map(item =><Item key={item.label} handleVote={handleVote} item={item} voted={voted} />)}
    </ul>
  )
}

export default ItemList
