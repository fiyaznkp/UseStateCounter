import React, { useReducer } from 'react'

const initialState = {
  cart: 0
}

 const reducer = (state, action) => {
   switch (action.type) {
    case "add to cart":
      return {cart: state.cart +1}
    case "remove from cart":
      return {cart: state.cart -1}
    case "reset":
      return initialState
    default:
      return state      
   }
 }

const ReducerHook = () => {

    let [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h3>{state.cart}</h3>
      <button onClick={() => {
        dispatch({type: "add to cart"})
      }}>
        Add to Cart
      </button>
      <button onClick={() => {
        dispatch({type:"remove from cart"})
      }}>Remove from Cart</button>
      <button onClick={()=>{
        dispatch({type:"reset"})
      }}>Reset</button>
    </div>
  )
}

export default ReducerHook