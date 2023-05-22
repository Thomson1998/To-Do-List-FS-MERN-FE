import React, { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import {BsCheckCircleFill} from 'react-icons/bs'




const ToDo = ({text, updateMode, deleteToDo}) => {
  const [colorChange, setcolorChange] = useState(false)
  const handleClick = () =>{
    setcolorChange(!colorChange)
  }
  return (
    <div className="todo" >
        <div className="icon" >
        <div className="text" >{text} </div>
        <div className="icons">
            <BsCheckCircleFill className="icon" onClick={handleClick} style={{color:colorChange ? "#008000":"#fff"}}  />
            <BiEdit className="icon" onClick={updateMode} />
            <AiFillDelete className="icon" onClick={deleteToDo} />
        </div>
        </div>
    </div>
  )
}


export default ToDo



// onClick={handleClick} style={{backgroundColor:colorChange ? "green":"black"}}

