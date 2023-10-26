import { useState } from "react";

const StatesOne = () => {
    const [name,setName] = useState("ali")

    const addName=(newName) => {
        setName(newName)
    }

    return(
        <div>
          <h1>My Name is :{name}</h1>
          <input 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <button onClick={()=> addName("Fiyaz")}>Add Name</button>
          
        </div>
    )
    
}

export default StatesOne