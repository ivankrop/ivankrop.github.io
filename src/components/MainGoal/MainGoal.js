import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class MainGoal extends Component{
    render(){
        const {main_goal, handleSetMainGoal} = this.props;
        let field;
        if(main_goal){
            field = <div>
                <p>Main goal for today</p>
                <h3>{main_goal}</h3>
            </div>
        } else {
            field = 
            <div>
                <p>What is your main goal for today?</p>
                <Field
                    component="input"
                    name="mainGoal"
                    placeholder="I want to learn React!" 
                    onKeyPress = {handleSetMainGoal}
                    value = {main_goal}
                    className = "todo-input"
                    /> 
            </div>
        }
        return <div>
            <div onClick = {handleSetMainGoal}>
                {field}
            </div>
        </div>
    }
}

export default reduxForm({
    form:'mainGoal'
})(MainGoal);