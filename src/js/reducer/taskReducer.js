import { ADD_TASK, COMPLETE_TASK, DELATE_TASK, EDIT_TASK, RECHERCHE_TASK } from "../type";

const initialState = {
    taskList: [
        {
            id: 0,
            task: "learn HTML and CSS",
            isDone: true,
        }, {
            id: 1,
            task: "learn JS",
            isDone: true,
        }, {
            id: 2,
            task: "learn REACTJS",
            isDone: true,
        }, {
            id: 3,
            task: "learn Nodejs",
            isDone: false,
        }
    ]
};
const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, taskList: [...initialState.taskList, payload] }
        case EDIT_TASK:
            return { ...state, taskList: state.taskList.map(el => el.id === payload.id ? payload : el) }
        case DELATE_TASK:
            return { ...state, taskList: state.taskList.filter(todo => todo.id !== payload) }
        case COMPLETE_TASK:
            return { ...state, taskList: state.taskList.map(el => el.id === payload ? { ...el, isDone: !el.isDone } : el) }
        case RECHERCHE_TASK:
            return {
                ...state,
                taskList: state.taskList.filter((todo) =>
                    todo.task.toUpperCase().includes(payload.toUpperCase()),
                ),
            }
        default:
            return state;
    }
}

export default taskReducer;