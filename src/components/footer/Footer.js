import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section id="footer">
                <p> this is my footer </p>
            </section>
        );
    }
}

export default Footer;