import React, { MouseEvent } from 'react';
import './logo.css';
import './main.css';
import Typeit from './Typeit';
import Navbar from './Navbar';

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

                    let displayStatus = document.getElementsByClassName('navbar')[0];
                    let display800Status = document.getElementsByClassName('welcomeText')[0];
                    
                    if(displayStatus.classList.contains('display-none')){
                        displayStatus.classList.remove('display-none');

                    }else{
                        displayStatus.classList.add('display-none');

                    }

                    if(display800Status.classList.contains('display-none800')){
                        display800Status.classList.remove('display-none800')

                    }else{
                        display800Status.classList.add('display-none800')

                    }
                        }, 95);
                    }, 95);
                }, 95);

        setTimeout(() => {
            e.target.classList.remove('logo5');
            e.target.classList.add('logo1');
                }, 1400);
    }

    //useEffect(()=>{

    //})

    return(
        <div className="mainpage"> 
            <div className="top">
                <img alt="logo" className="logo1 nav-logo" onClick={logoHandle} />
                <Navbar className="navbar display-none"/>
            </div>
            <Typeit className="welcomeText" phrase="Welcome to IEEE University at Albany Branch" delay={34}/>
        </div>
    );
} 



export default Main;
