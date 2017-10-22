import React from 'react';
import {render} from 'react-dom';


class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section id="home">
                <p>Test Content Home</p>
            </section>
        );
    }
}

export default Home;