import React from 'react';
import {render} from 'react-dom';
import {
    RaisedButton,
    SelectField,
    MenuItem,
    Dialog,
    FlatButton,
    TextField
} from 'material-ui';


class AddInventoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button_disabled: false,
            title: '',
            selectVal: '',
            descVal: '',
            priceVal: 0,
            open: false,
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onChangeDesc= this.onChangeDesc.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    saveItem() {
        this.props.onCreate(
            this.state.title,
            this.state.descVal,
            this.state.priceVal
        ).then((suc) => {
            if(suc){
                this.handleClose();
            }
        });

    }

    onChangeInput(event, newVal) {
        if(newVal.length){
            this.setState({title: newVal});
            this.setState({button_disabled: false});
        } else {
            this.setState({button_disabled: true});

        }
    }

    onChangeSelect = (event, newVal) => this.setState({selectVal: newVal});
    onChangeTitle = (event, newVal) => this.setState({title: newVal});
    onChangeDesc = (event, newVal) => this.setState({descVal: newVal});
    onChangePrice = (event, newVal) => this.setState({priceVal: newVal});


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({title: ''});
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={false}
                onClick={this.saveItem}
            />,
        ];
        return (
            <div>
                <TextField
                    hintText="e.g Beamer, Table etc."
                    floatingLabelText="Add new inventory"
                    onChange={this.onChangeTitle}
                />
                <RaisedButton label="Add"
                              primary={true}
                              disabled={this.state.button_disabled}
                              onClick={this.handleOpen}
                />
                <Dialog
                    title='New Inventory'
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        floatingLabelText="Title"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                    />
                    <TextField
                        floatingLabelText="Description"
                        onChange={this.onChangeDesc}
                    />
                    <TextField
                        floatingLabelText="Price"
                        onChange={this.onChangePrice}
                    />
                    <SelectField
                        floatingLabelText="Frequency"
                        value={this.state.value}
                        onChange={this.onChangeSelect}
                    >
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>
                </Dialog>

            </div>

        );
    }
}

export default AddInventoryItem;