import React, {Component} from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'
import {connect} from 'react-redux'
import * as inventory from '../actions/inventoryActions'

import '../App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.onCreate = this.onCreate.bind(this);
    }

    componentWillMount(){
        this.props.dispatch(inventory.fetchInventory());
    }

    onCreate(title){
        console.log('Clicked on Create. Val: ', title);

    }




    render() {
        return (
            <div className="App">

                <Header title='Playground' version='Version 0.1'/>

                <Main onCreate={this.onCreate} inventory={this.props.inventory} />

                <Footer/>

            </div>
        );
    }
}


function mapStateToProps(store) {
    return {
        inventory: store.inventory.inventory,
        inventoryFetched: store.inventory.fetched,
    };
}

export default connect(mapStateToProps)(App);