import React from "react";

function Nav(){

    return(
        <header>
            <nav className="nav-wrapper ">
            <div className="container nav-container"> 
                <i className="left material-icons">chevron_leftCBchevron_right</i> 
                <ul className="right ">
                    <li className="">About Me</li>
                    <li className="">Projects</li>
                    <li className="">Contact Me</li>
                    <li className="">Resume</li>
                </ul>
            </div> 
            </nav>
        </header>
    )
}

export default Nav;