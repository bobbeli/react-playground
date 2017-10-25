import React from 'react';
import {AppBar} from 'material-ui';


class Header extends React.Component {
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