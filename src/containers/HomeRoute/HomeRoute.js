import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAllData } from '../../actions/todo';

class HomeRoute extends Component{
    render(){
        const { component: Component, ...rest } = this.props
        return <Route {...rest}
                    render={props => {
                    return this.props.username ? <Redirect to="/todo"/> : <Component {...props} />
                    }}
                />
    }

    componentWillMount(){
        this.props.actions.loadAllData();
    }
}

const mapStateToProps = (state)=>({
    username: state.todo.username
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadAllData
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (HomeRoute);