import React from 'react';
import {render} from 'react-dom';


class Blog extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section id="blog">
                <p>Test Content Blog</p>
            </section>
        );
    }
}

export default Blog;