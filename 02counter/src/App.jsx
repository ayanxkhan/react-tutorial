import { useState } from "react"

function App() {

  let [counter, setcounter] = useState(15)
  // let counter=15

  const addValue = () =>{
    // console.log("Clicked",counter)
    // counter=counter+1
    setcounter(counter + 1)
  }

  const removeValue = () =>{
    // console.log("Clicked",counter)
    // counter=counter-1
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}
      >Add value {counter}
        </button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
