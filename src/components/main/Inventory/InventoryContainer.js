import React, { Component } from 'react';
import InventoryTable from './InventoryTable';


class InventoryContainer extends Component {
    render() {
        return (
            <div>
                <InventoryTable inventoryList={this.props.inventoryList} />
            </div>
        );
    }


}



export default InventoryContainer;
