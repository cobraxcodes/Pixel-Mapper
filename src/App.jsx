import { useState } from "react";
import './App.css'
function App(){
  const [coordinates, setCoordinates]=useState({x:0, y:0})

  const handleCoordinates = (e) =>{
    e.preventDefault()
    setCoordinates({x:e.clientX , y:e.clientY})
  }
  return(
    <div onMouseMove={handleCoordinates} className="mainDiv">
      <p>X-axis:{coordinates.x}</p>
      <p>Y-axis: {coordinates.y}</p>
    </div>
  )
}

export default App