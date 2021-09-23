import React, { Component } from 'react';
import Name from './components/Name';


class App extends Component {
    render() {
        return (
            <div id="app">
                <h1>Welcome</h1>
                <h4>This is a React Application</h4>
                <Name/>
            </div>
        );
    }
}

export default App;