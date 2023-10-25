import { useReducer } from "react";

const initialState =10
const reducer = (state, action) =>{
  return newState
}

const ReducerEg1 = () => {

  let [state,dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>{state}</h2>
    </div>
  )
}

export default ReducerEg1