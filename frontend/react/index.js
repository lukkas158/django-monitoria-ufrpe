import React from 'react';
import {render} from 'react-dom';
import {RegisterForm} from './components/register';
import './style.css';
class App extends React.Component {
    render() {
        return (
            <RegisterForm/>
        )
        
    }
}


render(<App/>, document.getElementById("root"));