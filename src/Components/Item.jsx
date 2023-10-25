import React, { useEffect, useState } from 'react'

function Item() {
    const [count,setCount] = useState(0)
    
    useEffect(() =>{
        setInterval(() => {
            setCount(count +1)
        
    },1000)
})
    return(
        <diV>
            <h1>
                i have rendered {count} times
            </h1>
        </diV>
    )
}

export default Item