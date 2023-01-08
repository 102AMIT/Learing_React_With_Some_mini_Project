import React,{useEffect, useState}from 'react'

const UseEffect1 = () => {

  const [count,setCount]=useState(0);

  useEffect(() => {
    console.log("Hello UseEffects");
    if(count >=1){
      document.title=`Chats (${count})` 
    }else{
      document.title=`Chats` 
    }
    
  },[count]);
  console.log("Hello outside"); 

  return (
    <>
    <div style={{fontSize:"50px"}}>{count}</div>
    <button style={{width:"180px",height:"50px",padding:"5px"}} onClick={()=>setCount(count +1)}>Click</button>
    </>
  )
}

export default UseEffect1