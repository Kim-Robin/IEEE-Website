import React, { useEffect, useState } from 'react';

export const About: React.FC = () => {
    return (
        <div id="about-component">
            <div className="about-header">
                <h1>The UAlbany IEEE</h1> 
            </div>
            <div className="about-highlight"></div>
            <div className="about-content">
                <section>
                    <h1>Technology for Society</h1>
                    <p>The UAlbany Institute of Electrical and Electronics Engineers is the hub for all students who ask for more from the computers in their lives. Our goal is to advocate for the advancement of technology and share with others the value of mastering its many arts.</p>
                </section>
                <section>
                    <h1>Community</h1>
                    <p>We host technical workshops, coding interviews, hackathons, company talks, and research talks, all while maintaining a tight knit and welcoming community of professionals.</p>
                </section>
                <section>
                    <h1>Professional Development</h1>
                    <p>We provide the means necessary to bridge the gap, connecting with both local tech and big tech alike (such as Google, Cisco and Global Foundries and Kitware) as well as providing students with access to cutting edge research talks from our school’s very own faculty. </p>
                </section>
            </div>
        </div>
    );
}