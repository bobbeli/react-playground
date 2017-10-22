import React from 'react';
import {render} from 'react-dom';
import {AppBar} from 'material-ui';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="header">
                <header>
                    <AppBar
                        title={this.props.title}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                </header>

            </section>
        );
    }
}

export default Header;