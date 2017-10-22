import React from 'react';
import {render} from 'react-dom';
import AddInventoryItem from './AddInventoryItem'



class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <AddInventoryItem />

    );
    }
}

export default Main;