import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Li (props) {
    return(
        <li>
            <NavLink activeClassName="active" className="nav-link" to={props.to}>{props.title.toUpperCase()}</NavLink>
        </li>
    )
}