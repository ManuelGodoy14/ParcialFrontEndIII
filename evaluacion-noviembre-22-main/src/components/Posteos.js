import React from 'react'
import data from "./data.json"
import Post from "./Post"
import "../index.css"

const Posteos = ({ incrementsLikes }) => {
  return (
    <div className='container'>
      {data.map(data => (<Post key={data.id} data={data} incrementsLikes={incrementsLikes}/>))}
    </div>   
    
  )
}

export default Posteos

