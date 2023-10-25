// import {useReducer} from 'react'

// const initialState =0
//  const reducer =(state,action) =>{
//     switch(action) {
//       case "add to cart":
//         return state + 1  
//       case "remove from cart":
//         return state -1
//       case "reset":
//         return initialState      
//     }
//     }
 

// const ReducerEg2 = () => {
//     let [state,dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//         <h2>{state}</h2>
//         <button onClick={()=>{dispatch("add to cart")}}>Add to cart</button>
        
//         <button onClick={()=>{dispatch("remove from cart")}}>Remove from cart</button>
//         <button onClick={()=>{dispatch("reset")}}>Reset</button>
//     </div>
//   )
// }

// export default ReducerEg2