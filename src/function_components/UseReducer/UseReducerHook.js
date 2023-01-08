import React from 'react'
import { useReducer } from 'react';

const initialState=0;

// dispatch trigger the action method
const reducer = (state , action) =>{
    console.log(state , action);

    if(action.type === "INCREMENT") return state +1;
    if(action.type === "DECREMENT") return state -1;
    return  state;
}
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer , initialState);

  return (
    <div style={{height:"40vh",width:"50%",marginLeft:"25%",background:"lightgray"}}>

        <p style={{fontSize:"25px", fontWeight:"700" }}>{state}</p>

        <div style={{height:"40%",width:"100%"}}>

            <button style={style} onClick={()=>dispatch({type :"INCREMENT"})}>Increase</button> 
            <button style={style} onClick={()=>dispatch({type :"DECREMENT"})}>decrease</button>

        </div>

    </div>
  )
}
const style={display:"block",height:"30%",width:"20%",backgroundColor:"yellowgreen",marginLeft:"40%",marginTop:"10px"};

export default UseReducerHook