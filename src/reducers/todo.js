import {SET_NAME, 
    CHANGE_NAME, 
    MAIN_GOAL, 
    ADD_TODO, 
    LOAD_ALL_DATA, 
    DELETE_TODO, 
    COMPLETE_TODO, 
    GET_SOLVED_LENGTH} from '../actions/todo';

const initialState = {
    username: '',
    main_goal: {},
    todo_list : [],
    solved_length: 0
};

export default (state = initialState, action) => {
    switch(action.type){
        case LOAD_ALL_DATA:
            return{
                ...state,
                username: action.username,
                main_goal: action.main_goal,
                todo_list: action.todo_list
            }
        case SET_NAME:
            return{
                ...state,
                username: action.username
            }
        case CHANGE_NAME:
            return{
                ...state,
                username: action.username,
                main_goal: action.main_goal,
                todo_list: action.todo_list
            }
        case MAIN_GOAL:
            return{
                ...state,
                main_goal: action.main_goal
            }
        case ADD_TODO:
            return{
                ...state,
                todo_list: action.todo_list
            }
        case DELETE_TODO:
            return{
                ...state,
                todo_list: action.todo_list
            }
        case COMPLETE_TODO:
            return{
                ...state,
                todo_list: action.todo_list
            }
        case GET_SOLVED_LENGTH:
            return{
                ...state,
                solved_length: action.solved_length
            }
        default: return state;
    }
}