import React,{useEffect,useState} from 'react'

function UseEffect2() {

    const [width,setWidth]=useState(window.screen.width);

    const actualWidth = () =>{
        setWidth(window.innerWidth);
    }
   
    useEffect(() => {
        console.log("useEffect");
        window.addEventListener("resize",actualWidth);
        return ()=>{
            window.removeEventListener("resize",actualWidth);
        }
    },[]);

  return (
    <div>
        <p>Your Current Display Width IS</p>
        <p>{width}</p>
    </div>
  )
}

export default UseEffect2