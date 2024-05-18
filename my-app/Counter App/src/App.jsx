import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
          Reset
        </button><button onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          }else{
            alert("Negative Values Not Allowed!")
          }
          
          }}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
