import {reset} from 'redux-form';

export const SET_NAME = 'SET_NAME';
export const CHANGE_NAME = 'CHANGE_NAME';
export const MAIN_GOAL = 'MAIN_GOAL';
export const ADD_TODO = 'ADD_TODO';
export const LOAD_ALL_DATA = 'LOAD_ALL_DATA';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const GET_SOLVED_LENGTH = 'GET_SOLVED_LENGTH';

export const loadAllData = () => dispatch => {
    let { username, main_goal, todo_list } = JSON.parse(localStorage.getItem('user_data')) ? 
        JSON.parse(localStorage.getItem('user_data')) : { username: '', main_goal: {}, todo_list: [] };
    dispatch({
        type: LOAD_ALL_DATA,
        username: username,
        main_goal: main_goal,
        todo_list: todo_list
    })
    dispatch(getSolvedLength())
}

export const setName = ({ username }) => dispatch => {
    dispatch({
        type: SET_NAME,
        username: username
    })
    dispatch(updateLocalStorage());
}

export const changeName = () => dispatch => {
    localStorage.removeItem('user_data');
    dispatch({
        type: CHANGE_NAME,
        username: '',
        main_goal: {},
        todo_list: []
    })
}

export const setMainGoal = (value) => dispatch => {
    dispatch({
        type: MAIN_GOAL,
        main_goal: {
            value: value,
            date: new Date()
        }
    })
    dispatch(updateLocalStorage());
}

export const addTodo = (value) => (dispatch, getState) => {
    const { todo: { todo_list } } = getState();
    let newTodoList = [...todo_list, { value: value, complete: false, id:Date.now() }];
    dispatch({
        type: ADD_TODO,
        todo_list: newTodoList
    })
    dispatch(reset('newTodo'));
    dispatch(getSolvedLength());
    dispatch(updateLocalStorage());
}

export const deleteTodo = (id) => (dispatch, getState) => {
    const { todo: { todo_list } } = getState();
    let newTodoList = todo_list.filter((elem) => {
        return elem.id !== id
    })
    dispatch({
        type: DELETE_TODO,
        todo_list: newTodoList
    })
    dispatch(getSolvedLength());
    dispatch(updateLocalStorage());
}

export const completeTodo = (id) => (dispatch, getState) => {
    const { todo: { todo_list } } = getState();
    todo_list.forEach((elem) => {
        if (elem.id === parseInt(id)) {
            elem.complete = !elem.complete;
        }
    })
    dispatch({
        type: COMPLETE_TODO,
        todo_list: todo_list
    })
    dispatch(getSolvedLength());
    dispatch(updateLocalStorage());
}

export const getSolvedLength = () => (dispatch, getState) => {
    const { todo: { todo_list } } = getState();
    let new_solved_length = 0;
    todo_list.forEach((elem) => {
        new_solved_length = elem.complete ? new_solved_length : new_solved_length + 1;
    })
    dispatch({
        type: GET_SOLVED_LENGTH,
        solved_length: new_solved_length
    })
}

const updateLocalStorage = () => (dispatch, getState) => {
    const { todo } = getState();
    localStorage.setItem('user_data', JSON.stringify(todo));
}