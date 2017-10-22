import React from 'react';
import {render} from 'react-dom';


class Page extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section id="page">
                <p>Test Content Page</p>
            </section>
        );
    }
}

export default Page;