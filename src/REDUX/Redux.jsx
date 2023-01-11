import React from 'react'
import './redux.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from './actions/index';
const Redux = () => {
    const myState= useSelector((state)=>state.changeTheNumber);
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h3>Using React And Redux</h3>

        <div className="quantity">
            <a title='Decrement' className="quantity_minus" onClick={()=>dispatch(decrement())}><span>-</span></a>
            <input type="text" name='quantity' className="quantity_input" value={myState} />
            <a title='Increment' className="quantity_plus" onClick={()=>dispatch(increment())}><span>+</span></a>
        </div>

    </div>
  )
}



export default Redux