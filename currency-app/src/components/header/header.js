import React from 'react';
import Navbar from './navbar';

export default class Header extends React.Component {
    render() {
        return(
            <div className="header-wrapper">
                <div className="header-text">
                    <h1 className="greetings">Welcome to currency React app</h1>
                </div>
                <div className="header-menu">
                    <Navbar />
                </div>
            </div>
        )
    }
}