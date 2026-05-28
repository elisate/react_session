import React from 'react'
import {useState} from 'react'
import Form from "./Form"

const Hooks=()=>{
    const [count, setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+2);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }

    const [modal,setModal]=useState(false);
    const handleModal=()=>{
        setModal(!modal);
    }

    return(
        <div className='p-24'>  
        {modal && <Form handleModal={handleModal}/>} 
        
    <h1 className="text-2xl font-bold pb-7">Counting:{count}</h1>

    <button type="button" onClick={handleIncrement} className="bg-blue-500 p-2">
      Increment
    </button>
<button type="button" onClick={handleDecrement} className="bg-red-500 p-2 ml-4">
      Decrement
    </button>
    <button type="button" onClick={handleModal} className="bg-green-500 p-2 ml-4">
      Toggle Form
    </button>
                </div>
    )
}
export default Hooks