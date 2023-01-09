import React from 'react'

import  {FirstName,lastName}  from '../../App'
const Context4 = () => {
  return (
    <>
    <FirstName.Consumer>{(fname)=>{
        return(
            <lastName.Consumer>{(lastName)=>{
                return <h1>Hello i'm {fname} {lastName}</h1>
            }}</lastName.Consumer>
        ) 
    }}</FirstName.Consumer>
    
    </>
  )
}

export default Context4