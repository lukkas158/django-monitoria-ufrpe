import React from 'react';
import {render} from 'react-dom';
import {RegisterForm} from './components/register';
import {Header} from './components/header';
import {Footer} from './components/footer';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <RegisterForm/>
                <Footer/>
            </div>
        )
        
    }
}


render(<App/>, document.getElementById("root"));