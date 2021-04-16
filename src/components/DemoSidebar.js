import React from 'react';
import './DemoSidebarStyle.css';
import Link from 'react-router-dom';


const DemoSidebar = () => {
    return (
        <div>
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <Link to="/current-stages/explore">Explore</Link>
                <Link to="/current-stages/my-work">My Work</Link>
            </div>

            <div id="main">
                <button class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button>
                <h2>Collapsed Sidebar</h2>
            </div>
        </div>
    );
};

export default DemoSidebar;