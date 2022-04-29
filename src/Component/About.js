import React from 'react'
import { useNavigate } from 'react-router-dom'

const About =()=> {
  const route = useNavigate();
  return (
    <div>
    <h2>About</h2>
    <p>About About</p>
    <button onClick={()=>route(`/Home`)}>back to Home</button>
    </div>
  )
}

export default About