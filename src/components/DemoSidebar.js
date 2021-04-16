import React from 'react';
import './DemoSidebarStyle.css';
import { Link } from 'react-router-dom';


const DemoSidebar = () => {

    //close the sidebar navigator
    function closeNav() {
        if(document.getElementById('mySidebar') != null){
            document.getElementById('mySidebar').style.width = '250px';
            document.getElementById('main').style.marginLeft = "250px";
            console.log("Closing Nav!...")
        }
        console.log("Hello closed console?");
    }
    //open the side bar navigator
    function openNav() {
        if(document.getElementById('mySidebar') != null){
            document.getElementById('mySidebar').style.width = '0px';
            document.getElementById('main').style.marginLeft = "0px";
            console.log("Opening Nav!...");
        }
        console.log("hello open console?");
    }

    function redirect(path) {
        return <Link to={path} />
    }

    return (
        <div>
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn extra" onClick={closeNav()}>&times;</a>
                <Link class="extra" to="/current-stages/explore">Explore</Link>
                <Link class="extra" to="/current-stages/my-work">My Work</Link>
            </div>

            <div id="main">
                <button class="openbtn" onClick={openNav()}>&#9776; Options</button>
            </div>
        </div>
    );
};

export default DemoSidebar;