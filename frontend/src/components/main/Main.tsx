import React from 'react';
import './logo.css';
import './main.css';
import Typeit from './Typeit';
import Navbar from './Navbar';

const Main = () => {

    return(
        <div className="main-header"> 
            <Navbar className="navbar display-none" />
            <Typeit className="welcomeText" phrase="Welcome to the IEEE University at Albany Student Branch" delay={34} />
        </div>
    );
} 



export default Main;
