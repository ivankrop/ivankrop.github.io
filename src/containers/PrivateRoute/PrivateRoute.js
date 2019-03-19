import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component{
    render(){
        const { component: Component, ...rest } = this.props
        return <Route {...rest}
                    render={props => {
                    return !this.props.username ? <Redirect to="/"/> : <Component {...props} />
                    }}
                />
    }
}

const mapStateToProps = (state)=>({
    username: state.todo.username
});

export default connect(mapStateToProps) (PrivateRoute);