import React, { Component } from 'react';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <header>
                <h1>TRAINING EVALUATION!</h1>
                <img alt="fitness-img" src="https://i.pinimg.com/originals/d5/9c/5e/d59c5e7431c468c1f816eafd0b8b249f.gif"></img>
            </header>
        );
    }
}

export default Header;