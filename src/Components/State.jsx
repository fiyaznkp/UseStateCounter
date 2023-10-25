import { useState } from "react";

const State = () => {

    const [count,setCount] = useState(0)

    const increment =() => {
        if(count < 10) {
        setCount(count + 1)
    }} 

    const decrement = () => {
        if (count > 0){
        setCount(count -1)}
    }

    return(
        <div>
           <h1>Counter : {count}</h1> 
           <button onClick={increment}>Increase</button>
           <button onClick={decrement}>Decrease</button>
        </div>
    )
}

export default State