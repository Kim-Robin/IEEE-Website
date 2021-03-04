import React from 'react';

import discordLogo from './Discord-Logo-Color.png';

export const Social: React.FC = () => {

    return (
        <div className="social-container">
            <li><a className="fa fa-instagram" href="https://www.instagram.com/ieee.ualbany/?igshid=1mi2tfzxfd488" target="_blank" rel="noreferrer"></a></li>
            <li><a className="fa fa-twitter" href="https://twitter.com/IeeeUalbany?s=20" target="_blank" rel="noreferrer"></a></li>
            <li><a className="fa fa-github" href="https://github.com/UAlbany-IEEE-Student-Branch" target="_blank" rel="noreferrer"></a></li>
            <li><a className="fa fa-youtube" href="https://www.youtube.com/channel/UCJMvuEO6dZcyzTsWfh7cXTA" target="_blank" rel="noreferrer"></a></li>
            <li style={{display: "flex", alignItems: "center", justifyContent: "center"}}><a href="https://discord.gg/sQS77gYEVS" target="_blank" rel="noreferrer"><span style={{verticalAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}} className="fa fa-discord"><img width="30" src={discordLogo}></img></span></a></li>
            <li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/ieeeualbany/" target="_blank" rel="noreferrer"></a></li>
        </div>
    );
}