import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask, recherch } from '../js/action/taskAction'


const AddTask = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const add = () => {
        if (text){
            dispatch(addtask({id:Math.random(),task:text.trim(),isDone:false}))
            setText("")
        }
        else alert("Field shouldn't be empty")
    }
    const recherche=()=>{
        if(text){
            dispatch(recherch(text.trim()))
        }
    }
    return (
        <div className="add"> 
            <input type="text" onChange={e => (setText(e.target.value)+ recherche())} value={text} />
            <button onClick={add}>Add Task</button>
        </div>
    )
}

export default AddTask
