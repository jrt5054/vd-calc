import React from 'react';
import './CSS/Header.css'

function Header(props) {
    return (
        <div className="navbar navbar-default navbar-fixed-top header">
            <div className="container-fluid">
                {props.headerName}
            </div>
        </div>
    );
}

export default Header;