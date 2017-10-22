import React from 'react';
import {render} from 'react-dom';
import {TextField} from 'material-ui';
import {RaisedButton} from 'material-ui';


class AddInventoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button_disabled: true,
        }
    }

    addNewItem() {
        console.log('Clicked add new Item');
    }

    onChangeInput(event, newVal) {
        if(newVal.length){
            this.setState({button_disabled: false});
        } else {
            this.setState({button_disabled: true});

        }

    }

    render() {
        return (
            <div>
                <TextField
                    hintText="e.g Beamer, Table etc."
                    floatingLabelText="Add new inventory"
                    onChange={this.onChangeInput.bind(this)}
                />
                <RaisedButton label="Primary"
                              primary={true}
                              disabled={this.state.button_disabled}
                              onClick={this.addNewItem.bind(this)}
                />

            </div>

        );
    }
}

export default AddInventoryItem;