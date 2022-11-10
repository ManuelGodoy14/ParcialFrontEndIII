import React, { useState } from 'react'
import Posteos from './components/Posteos'
import Estatus from './components/Estatus'
import "./index.css"

const App = () => {

  const [countTotalLikes, setCountTotalLikes] = useState(0);

  const incrementsLikes = () => {
    setCountTotalLikes(countTotalLikes+1);
    console.log(countTotalLikes)
  }

  return (
      <body>
      <nav>
        <Estatus countTotalLikes={countTotalLikes}/>
      </nav>
        <Posteos incrementsLikes={incrementsLikes}/>
      </body>
  )
} 
export default App