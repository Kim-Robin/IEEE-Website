import React from 'react';

import discordLogo from './Discord-Logo-Color.png';

export const Social: React.FC = () => {

    function toggleShadow(event: any) {
        let element = event.target;
        element.classList.contains('shadow') ? element.classList.remove('shadow') : element.classList.add('shadow');
        element.classList.contains('fill-color') ? element.classList.remove('fill-color') : element.classList.add('fill-color');
    }

    return (
        <div className="social-container">
            <li onClick={toggleShadow}><a href="https://www.instagram.com/ieee.ualbany/?igshid=1mi2tfzxfd488" target="_blank"><span className="fa fa-instagram"></span></a></li>
            <li onClick={toggleShadow}><a href="https://twitter.com/IeeeUalbany?s=20" target="_blank"><span className="fa fa-twitter"></span></a></li>
            <li onClick={toggleShadow}><a href="https://github.com/UAlbany-IEEE-Student-Branch" target="_blank"><span className="fa fa-github"></span></a></li>
            <li onClick={toggleShadow}><a href="https://www.youtube.com/channel/UCJMvuEO6dZcyzTsWfh7cXTA" target="_blank"><span className="fa fa-youtube"></span></a></li>
            <li onClick={toggleShadow} style={{display: "flex", alignItems: "center", justifyContent: "center"}}><a href="https://discord.gg/sQS77gYEVS" target="_blank"><span style={{verticalAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}} className="fa fa-discord"><img width="30" src={discordLogo}></img></span></a></li>
        </div>
    );
}