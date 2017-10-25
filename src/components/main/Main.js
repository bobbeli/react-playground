import React from 'react';
import InventoryCreate from './Inventory/InventoryCreate'
import InventoryContainer from "./Inventory/InventoryContainer";


class Main extends React.Component {
    render() {
        return (
            <div>
                <InventoryCreate onCreate={this.props.onCreate} />
                <InventoryContainer inventory={this.props.inventory}/>
            </div>

        );
    }
}

export default Main;