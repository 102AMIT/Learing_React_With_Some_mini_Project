import React from 'react'

const UseStateObject = () => {

    const [myObject, setmyObject] = React.useState({
        name:"amit",age:26,school:"abc"
    });
    const changename=()=>{
        // setmyObject({name:"rohan",age:32,school:"xyz"});
        setmyObject({...myObject,age:21});//if we want to update some specific value then we use spread operator
    }

  return (
    <div>
        <h1>Name:{myObject.name} Age:{myObject.age} School:{myObject.school}</h1>
        <button onClick={changename}>Update</button>

    </div>
  )
}

export default UseStateObject