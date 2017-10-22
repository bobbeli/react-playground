import React, {Component} from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'
import * as user from '../actions/userAction';

import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: user.fetchUser(),
        }

    }


    render() {
       return( <div className="App">

            <Header title='Minimal Theme' version='Version 0.1' />

            <Main />

            <Footer />

        </div>
       );
    }
}

export default App;


