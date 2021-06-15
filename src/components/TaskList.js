import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const List = useSelector(state => state.taskReducer.taskList)
    console.log(List)
    return (
        <div>
            {
                List.map(el => <TaskItem el={el} key={el.id}/>)
            }
        </div>
    )
}

export default TaskList
