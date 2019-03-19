import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeName, setMainGoal, addTodo, deleteTodo, completeTodo } from '../../actions/todo';

import { PATHS } from '../../constants/routes';
import MainGoal from '../../components/MainGoal';
import TodoList from '../../components/TodoList';
import '../../styles/todo.css'; 

class TodoContainer extends Component{
    render(){
        const {username, main_goal, todo_list, solved_length} = this.props;
        return <div className = "todo-container">
            <div className = "section">
                <div className = "username">
                    <Popup
                        trigger={<h1>Hello, {username}!</h1>}
                        position="right bottom"
                        on="hover">
                        <div className="popup">
                            Are you not {username}?
                            <button onClick={this._handleChangeName}
                                    className = "button">
                                Change name
                            </button>
                        </div>
                    </Popup>
                </div>
                <div className="maingoal">
                    <MainGoal main_goal = {main_goal}
                        handleSetMainGoal = {this._handleSetMainGoal}/>
                </div>
            </div>
            <div className = "section">
                <TodoList todo_list = {todo_list}
                    solved_length = {solved_length}
                    handleAddTodo = {this._handleAddTodo}
                    handleDeleteTodo = {this._handleDeleteTodo}
                    handlecompleteTodo = {this._handlecompleteTodo}/>
            </div>
        </div>
    }

    componentDidMount(){
        let goalDay = new Date(this.props.goal_date).getDate();
        let currentDay = new Date().getDate();
        if (goalDay && (goalDay !== currentDay)) {
            this.props.actions.setMainGoal('');
        };
    }

    _handleChangeName = () => {
        this.props.actions.changeName();
        this.props.history.push(PATHS.INDEX);
    }

    _handleSetMainGoal = (e) => {
        if(e.key === 'Enter' && this.props.setNewGoal.values){
            this.props.actions.setMainGoal(this.props.setNewGoal.values.mainGoal);
        }
        if(e.type === 'click'){
            this.props.actions.setMainGoal('');
        }
    }

    _handleAddTodo = (e) => {
        if(e.key === 'Enter'  && this.props.addNewTodo.values){
            this.props.actions.addTodo(this.props.addNewTodo.values.newTodo);
        }
    }

    _handleDeleteTodo = (id) => {
        this.props.actions.deleteTodo(id);
    }
    _handlecompleteTodo = (event) => {
        const id = event.target.name;
        this.props.actions.completeTodo(id);
    }
}

const mapStateToProps = (state) => ({
    username: state.todo.username,
    main_goal: state.todo.main_goal.value,
    goal_date: state.todo.main_goal.date,
    todo_list: state.todo.todo_list,
    solved_length: state.todo.solved_length,
    setNewGoal: state.form.mainGoal,
    addNewTodo: state.form.newTodo
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeName,
        setMainGoal,
        addTodo,
        deleteTodo,
        completeTodo
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (TodoContainer);