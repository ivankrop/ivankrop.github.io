import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaTrash } from 'react-icons/fa'

class TodoList extends Component{
    render(){
        const {todo_list, solved_length, handleAddTodo, handleDeleteTodo, handlecompleteTodo} = this.props
        return <div>
            {
                !Array.isArray(todo_list)?'Loading...':<div>
                    <h2>{solved_length} TO DO</h2>
                    <Field 
                        component = "input"
                        name = "newTodo"
                        placeholder = "Add new TODO"
                        onKeyPress = {handleAddTodo}
                        className = "todo-input new-todo"
                        />
                    <ul>
                        {
                            todo_list.map((item, index)=> 
                                <li key = {index} className="todo-li">
                                    <div className="todo-item">
                                        <input
                                            name = {item.id}
                                            type = "checkbox"
                                            checked = {item.complete}
                                            onChange = {handlecompleteTodo}/>
                                        <p className={item.complete?'todo-item-completed':''}>{item.value}</p>
                                    </div>
                                    <button onClick = {()=>handleDeleteTodo(item.id)}
                                            className = "delete-button">
                                            <FaTrash/>
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    }
}

export default reduxForm({
    form:'newTodo'
})(TodoList);