import React from 'react'

const Lists = () => {
    const numbers=["Amit","kumar","thakur","rohit"]
  return (
    <div>
        
        <ul>
        {
        numbers.map((number) =><li>{number}</li>)
        }
        </ul>

    
    </div>
  )
}

export default Lists