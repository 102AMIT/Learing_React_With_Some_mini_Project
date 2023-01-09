import React,{useContext} from 'react'
import { BioData } from './ComA';
const ComC = () => {
    const name = useContext(BioData);
  return (
    <div>
        <h1>Hey Reciving Data Using UseContext : {name}</h1>
    </div>
  )
}

export default ComC