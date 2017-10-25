import React, {Component} from 'react';
import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableFooter,
    TableBody,
    TableRowColumn
} from 'material-ui/Table';


class InventoryTable extends Component {

    renderRow() {
        console.log('is defined ');

        if (typeof this.props.inventory.inventor !== 'undefined') {
            console.log('is defined ');
            return this.props.inventory.inventor.map((i) =>
                <TableRow key={i.id}>
                    <TableRowColumn>{i.id}</TableRowColumn>
                    <TableRowColumn>{i.title}</TableRowColumn>
                    <TableRowColumn>{i.price}</TableRowColumn>
                </TableRow>
            );
        }
    }

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Price</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.renderRow()}
                </TableBody>
            </Table>
        );
    }


}


export default InventoryTable;
