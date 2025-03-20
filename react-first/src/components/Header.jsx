import React from "react";
import ReactLogo from "./react.svg";

function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={ReactLogo} alt="React logo" className="logo" />
                <span className="title">ReactFacts</span>
            </nav>
        </header>
    );
}

export default Header;
