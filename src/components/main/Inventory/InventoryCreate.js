import React from 'react';
import {render} from 'react-dom';
import {RaisedButton, Dialog, FlatButton, TextField} from 'material-ui';


class AddInventoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button_disabled: true,
            title: '',
            open: false,
        }
    }

    addNewItem() {
        this.props.onCreate(this.state.title)
    }

    onChangeInput(event, newVal) {
        if(newVal.length){
            this.setState({title: newVal});
            this.setState({button_disabled: false});
        } else {
            this.setState({button_disabled: true});

        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="cancle"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <TextField
                    hintText="e.g Beamer, Table etc."
                    floatingLabelText="Add new inventory"
                    onChange={this.onChangeInput.bind(this)}
                />
                <RaisedButton label="Add"
                              primary={true}
                              disabled={this.state.button_disabled}
                              onClick={this.handleOpen.bind(this)}
                />
                <Dialog
                    title="Dialog With Date Picker"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >

                    <TextField hintText="Date Picker" />
                </Dialog>

            </div>

        );
    }
}

export default AddInventoryItem;