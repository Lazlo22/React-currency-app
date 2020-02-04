import React from 'react';
import Li from './li-element';

export default class Header extends React.Component {
    render() {
        return(
            <div className="menu">
                    <nav>
                        <ul>
                            <Li title="home " to="/home" />
                            <Li title="currencies rates" to="/currencies" />
                            <Li title="convert" to="/convert" />
                        </ul>
                    </nav>
            </div>
        )
    }
}