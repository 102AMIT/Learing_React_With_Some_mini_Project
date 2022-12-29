import React,{useState} from 'react'

const ShortCirEval = () => {
    const [demo, setstate] = useState("BYE");
  return (
    <div>
        <h1>{demo || "Hello Amit"}</h1>
        <h1>{demo && "Bye Amit"}</h1>
    
    </div>
  )
}

export default ShortCirEval