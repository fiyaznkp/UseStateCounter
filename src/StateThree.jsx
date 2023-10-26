import { useState } from "react";

const StateThree = () => {
  const [count,setCount] = useState(0)

  const add =() =>{
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count -1)
  }

  return(
    <div>
       <h2>Count is :{count}</h2> 
       <button onClick={add}>Add</button>
       <button onClick={decrease}>Decrease</button>
    </div>
  )

}
export default StateThree