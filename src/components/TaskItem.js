import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { compeletask, delatetask } from '../js/action/taskAction'
import EditTask from './EditTask'

const TaskItem = ({el}) => {
    const dispatch = useDispatch()
    console.log(el.task)
    return (
        <div>
            <div className={el.isDone? "done": null}>{el.task}</div>
            <div>
                
                <Button onClick={()=> dispatch(compeletask(el.id))}> {el.isDone ? "Undo" : "complete"}</Button>
                <EditTask el={el}/>
                <Button onClick={()=> dispatch(delatetask(el.id))}>delete</Button>
            </div>
        </div>
    )
}

export default TaskItem
