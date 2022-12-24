import React,{useState} from 'react'

//useState is function but at the same time when we call the function like useState() we got a array [initial value ,function];
// here basically the function is the setState by this function we are changing the state at run time
// initial value could be anything string array object number 
const UseState = () => {

const [myName,setMyname]=useState('Amit Kumar Thakur');

    const changeName=()=>{  
        
        let val=myName;
            
        (val==='Amit Kumar Thakur') ?setMyname('Use state working')  : setMyname('Amit Kumar Thakur');
        
    }
  return (
    <div>
        <h1>{myName}</h1>
        <button style={{padding:10,frontsize:10,backgroundColor:'blue',color:'white'}} onClick={changeName}>Click Me</button>
    </div>
  )
}

export default UseState