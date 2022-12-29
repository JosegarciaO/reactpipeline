import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Home.css'

function About() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>About page</h1>
      <p className="read-the-docs">About Page</p>
    </div>
  )
}

export default About;
