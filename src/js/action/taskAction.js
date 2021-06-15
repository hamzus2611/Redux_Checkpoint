import { ADD_TASK, COMPLETE_TASK, DELATE_TASK, RECHERCHE_TASK } from "../type"

export const addtask =(payload)=>{
    return {
        type : ADD_TASK,
        payload
    }
}
export const delatetask=(payload)=>{
    return{
        type : DELATE_TASK,
        payload
    }
}
export const compeletask=(payload)=>{
    return{
        type:COMPLETE_TASK,
        payload
    }
}
export const edittask=(payload)=>{
    return{
        type:COMPLETE_TASK,
        payload
    }
}
export const recherch = (payload) => ({
    type: RECHERCHE_TASK,
    payload
})
