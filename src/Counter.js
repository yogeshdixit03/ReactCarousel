import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("count updated")
    }, [])
    const decrement =() =>{
        setCount(count-1);
    }

    const increment = ()=>{
        setCount(count+1);
    }
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
        <button onClick={decrement}>-</button>
        <input type="text" value=""/>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter