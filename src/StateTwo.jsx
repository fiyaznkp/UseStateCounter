import { useState } from "react";

const StateTwo =() => {
    const [name,setName] = useState('')

    const changeName =(newName) => {
        setName(newName)
    }

    return(
        <div>
            <h1>Iam : {name}</h1>
            <input
               type="text"
               value={name}
               onChange={(e) => setName( e.target.value)}
            />
            <button onClick={()=>changeName["ahammed"]}>Change Name </button>
        </div>
    )
}
export default StateTwo