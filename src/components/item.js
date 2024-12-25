import React from 'react'

const Item = ({item,handleVote,voted}) => {
  return (
    <li>
    <p> {item.label}</p>
    {!voted&&(<button onClick={()=>handleVote(item)}>Vote</button>)}
    {voted&&(<p className='vote'>Votes: {item.votes}</p>)}
    </li>
  )
}

export default Item
