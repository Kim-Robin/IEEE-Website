import React from 'react';
import './navbar.css';

type Props = {
    className: string;
}


const Navbar: React.FC<Props> = ({className}) =>{
    return(
        <div className={className}>
           <ul className="nav-list">
                <li className="nav-content">
                    <a href="" >Event</a>
                </li>
                <li className="nav-content">
                    <a href="" >Members</a>
                </li>
                <li className="nav-content">
                    <a href="" >About</a>
                </li>
                <li className="nav-content">
                    <a href="" >Contact</a>
                </li>
           </ul> 
        </div>
          );

}

export default Navbar;
