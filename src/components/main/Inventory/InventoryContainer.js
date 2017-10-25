import React, { Component } from 'react';
import InventoryTable from './InventoryTable';


class InventoryContainer extends Component {
    render() {
        return (
            <div>
                <InventoryTable inventory={this.props.inventory} />
            </div>
        );
    }


}



export default InventoryContainer;
