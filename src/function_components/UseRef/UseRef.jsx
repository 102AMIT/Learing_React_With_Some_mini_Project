import React ,{useState,useRef}from 'react'
import './useRef.css';
const UseRef = () => {
    const name=useRef(null);
    const [show ,setShow] = useState(false)
    const submitForm = (e) =>{
        e.preventDefault();
        const displayName = name.current.value;
        displayName === "" ? alert("please fill the data"): setShow(true);
    }
  return (
    <div className='container'>
    <form action="" onSubmit={submitForm}>
        <h1>Enter Your Name</h1>
        <input type="text"  ref={name}/>
        <br />
        <button>Submit</button>
    </form>
        <h1>{show ? `Your lucky name is ${name.current.value}` : ""}</h1>
    </div>
  )
}

export default UseRef