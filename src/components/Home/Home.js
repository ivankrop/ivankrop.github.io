import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaArrowRight } from 'react-icons/fa'


class Home extends Component{
    render(){
        const {handleSubmit} = this.props;
        return <form onSubmit = {handleSubmit}>
            <h1 className = "home-title">Welcome to Todo-App</h1>
            <div>
                <Field 
                    name = "username"
                    component = "input"
                    placeholder = "please enter your name"
                    type="text"
                    className = "home-input"/>
                <button type = "submit"
                    className = "home-button">
                    <FaArrowRight/>
                </button>
            </div>
        </form>
    }
}

export default reduxForm({
    form:'home'
})(Home);