import React, {Component} from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'
import {connect} from 'react-redux'
import * as user from '../actions/userAction'

import '../App.css';

class App extends Component {


    componentWillMount(){
        this.props.dispatch(user.fetchAPIUser());

    }


    render() {
        return (
            <div className="App">


                <Header title='Playground' version='Version 0.1'/>

                <Main/>

                <Footer/>

            </div>
        );
    }
}


function mapStateToProps(store) {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
    };
}

export default connect(mapStateToProps)(App);