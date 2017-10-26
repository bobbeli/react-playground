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

    onCreate(title, desc, price){
        return new Promise((resolve, reject)=>{

            this.props.dispatch(
                inventory.addNewInventory(
                    this.props.inventoryList.length + 1,
                    title,
                    desc,
                    price)
            );

            //ToDo if Succesfully saved, resolve true, otherwise err
            resolve(true);

        });

    }




    render() {
        return (
            <div className="App">

                <Header title='Playground' version='Version 0.1'/>

                <Main onCreate={this.onCreate} inventoryList={this.props.inventoryList} />

                <Footer/>

            </div>
        );
    }
}


function mapStateToProps(store) {
    return {
        inventoryList: store.inventory.inventoryList,
        inventoryFetched: store.inventory.fetched,
    };
}

export default connect(mapStateToProps)(App);