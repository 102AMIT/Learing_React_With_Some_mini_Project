import React,{useState}from 'react'
import useCustomHook from './useCustomHook';
const Test1 = () => {

  const [count,setCount]=useState(0);

//   here we are using customHook basically we can say that it's our component
  useCustomHook(count);

  return (
    <>
    <div style={{fontSize:"50px"}}>{count}</div>
    <button style={{width:"180px",height:"50px",padding:"5px"}} onClick={()=>setCount(count +1)}>Click</button>
    </>
  )
}

export default Test1