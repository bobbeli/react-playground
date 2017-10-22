import React from 'react';
import {render} from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Home from '../content/Home';
import Page from '../content/Page';
import Blog from '../content/Blog';



class Main extends React.Component {
    constructor(props){
        super(props);
    }

    // ToDo Create all Route Paths for WP Menu
    render() {
        return (
            <section id="main">
                <main>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/page' component={Page}/>
                        <Route exact path='/blog' component={Blog}/>
                    </Switch>
                </main>
            </section>
        );
    }
}

export default Main;