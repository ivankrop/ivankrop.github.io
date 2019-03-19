import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setName } from '../../actions/todo';

import { PATHS } from '../../constants/routes'
import Home from '../../components/Home';
import '../../styles/home.css'; 

class HomeContainer extends Component{
    render(){
        return <div className = "home">
            <Home onSubmit = {this._handleEnter}/>
        </div>
    }

    _handleEnter = (value) => {
        this.props.actions.setName(value);
        this.props.history.push(PATHS.TODO);
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        setName
    }, dispatch)
});

export default connect(null, mapDispatchToProps) (HomeContainer);