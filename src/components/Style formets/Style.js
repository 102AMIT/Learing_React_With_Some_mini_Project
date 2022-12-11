import React from 'react';
import './style.css'

// for incline css

const styleObj={
    fontSize:"100px",
    color:"red"
}

function Style(props) {
    const myClass=props.myClass?'myClass':''
    return (
        <div>
            <h1 className='external-css'>External CSS</h1>
            <h1 className={`${myClass} fontsize `}>CSS using Props</h1>
            <h1 style= {styleObj}>Inline CSS Using object</h1>

        </div>
    );
}

export default Style;