import React from 'react'
import { useState ,useEffect} from 'react';

const Counter = () => {
    const [counter,setCount] = useState(0);

    useEffect(()=>{
        return ()=>{
            console.log("thrid")
        }
    },[])
    useEffect(() => {
        console.log("second");
        
    });
    let decCounter = () =>{
        setCount(counter -1);
        console.log(counter);
    }
  return (
    <div>
    {console.log("first")}
    <h1>{counter}</h1>
    <button onClick={()=>{setCount(counter +1)}}>Click me Inc</button>
    <button onClick={decCounter}>Click me Dec</button>
    

    </div>
  )
}

export default Counter