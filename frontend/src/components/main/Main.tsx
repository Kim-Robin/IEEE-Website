import React, { MouseEvent } from 'react';
import './logo.css';
import './main.css';
import Typeit from './Typeit';

const Main = () => {
    const logoHandle = (e: any)  => {
        e.preventDefault();
        console.log(e.target.className);
        e.target.classList.remove('logo1');
        e.target.classList.add('logo2');
        setTimeout(()=>{
            e.target.classList.remove('logo2');
            e.target.classList.add('logo3');
            setTimeout(() => {
                e.target.classList.remove('logo3');
                e.target.classList.add('logo4');
                setTimeout(()=>{
                    e.target.classList.remove('logo4');
                    e.target.classList.add('logo5');
                        }, 95);
                    }, 95);
                }, 95);

        setTimeout(() => {
            e.target.classList.remove('logo5');
            e.target.classList.add('logo1');
                }, 1400);
    }
    return(
        <div className="mainpage"> 
            <img alt="logo" className="logo1" onClick={logoHandle} />
            <Typeit className="welcomeText" phrase="Welcome to IEEE University at Albany Branch" delay={80}/>
        </div>
    );
} 



export default Main;
