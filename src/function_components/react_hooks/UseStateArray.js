import React,{useState} from 'react'

const UseStateArray = () => {

    const bioData=[
        {
            id:0,
            myName:"Amit",
            age:26
        },
        {
            id:1,
            myName:"Thakur",
            age:27
        }
    ]
    
    const [myArray, setmyArray] = useState(bioData);

    const clearArray= ()=>{
        setmyArray([]);
    }
    const removeElement=(id)=>{
        // alert(id);
        const myNewArray = myArray.filter((curElement)=>{
            return curElement.id !== id;
        });

        setmyArray(myNewArray);
    }

  return (
    <div>
        {
            myArray.map((item)=>{
            return <h1 key={item.id}>Name :{item.myName} and Age : {item.age}
                {/* if we wnat to pass some argument in function we need to write fat arrow function otherwise not function run every time */}
                   <button style={style} onClick={()=>removeElement(item.id)}>remove</button>
            </h1>
            })
        }
        <button onClick={clearArray}>clear</button>
    </div>
  )
}

const style={color:"white",fontSize:"20px",backgroundColor:"red", margin:"10px",padding:"10px", borderRadius:"20px"}

export default UseStateArray