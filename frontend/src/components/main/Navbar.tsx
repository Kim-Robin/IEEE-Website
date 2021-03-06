import React from 'react';
import './navbar.css';

type Props = {
    className: string;
}


const Navbar: React.FC<Props> = ({className}) =>{

    const logoHandle = (e: any)  => {
        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        if (browserWidth < 800) {
            const overlay = document.getElementById("overlay") as HTMLElement;
            if (overlay.style.width === "100%") {
                overlay.style.width = "0";
            } else {
                overlay.style.width = "100%";
            }
        }

        e.preventDefault();
        console.log(e.target.className);

        let circuits: HTMLImageElement = document.getElementById("circuits") as HTMLImageElement;

        circuits.classList.add('circuits_1');
        setTimeout(() => {
            circuits.classList.remove('circuits_1');
            circuits.classList.add('circuits_2');
        }, 50);

        setTimeout(() => {
            circuits.classList.remove('circuits_2');
            circuits.classList.add('circuits_3');
        }, 100);

        setTimeout(() => {

            circuits.classList.remove('circuits_3');
            circuits.classList.add('circuits_4');

            let displayStatus = document.getElementsByClassName('navbar')[0];
            // let display800Status = document.getElementsByClassName('welcomeText')[0];
            
            if(displayStatus.classList.contains('display-none')) {
                displayStatus.classList.remove('display-none');
            } else {
                displayStatus.classList.add('display-none');
            }
        }, 150);

        setTimeout(() => {

            circuits.classList.remove('circuits_4');
            circuits.classList.add('circuits_0');
        }, 1000);
    }

    return(
        <div className="navbar-container"> 
            <div id="logo-container">
                <img alt="circuits" id="circuits" className="circuits_0" />
                <img alt="logo" className="logo1 nav-logo" onClick={logoHandle} />
            </div>
            <div className={className}>
                <ul className="nav-list">
                    <li className="nav-list-item" onClick={logoHandle}>
                        <a href="#about-component" >About</a>
                    </li>
                    <li className="nav-list-item" onClick={logoHandle}>
                        <a href="#events-component"  >Event</a>
                    </li>
                    <li className="nav-list-item" onClick={logoHandle}>
                        <a href="#officers-component" >Members</a>
                    </li>
                </ul> 
            </div>
            <div id="overlay">
                <ul className="overlay-content">
                    <li className="overlay-nav-list-item">
                        <a href="#about-component" onClick={logoHandle} >About</a>
                    </li>
                    <li className="overlay-nav-list-item">
                        <a href="#events-component" onClick={logoHandle} >Event</a>
                    </li>
                    <li className="overlay-nav-list-item">
                        <a href="#officers-component" onClick={logoHandle} >Members</a>
                    </li>
                </ul>
            </div>
        </div>    
    );
}

export default Navbar;
