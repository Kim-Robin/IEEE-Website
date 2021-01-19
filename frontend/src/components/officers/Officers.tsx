import React, { useState } from 'react';

export const Officers: React.FC = () => {
    let officers: JSX.Element[] = [
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />
    ];

    return (
        <div>
            <h1 style={{marginLeft: "2%"}}>Meet the officers</h1>
            <div className="officers-container">
                {
                    officers.map((item: JSX.Element, index: number) => {
                        return (
                            <div key={index} style={{margin: "2%"}}>{item}</div>
                        )
                    })
                }
            </div>
        </div>
    );
}

const OfficerCard: React.FC = () => {
    return (
        <div className="officer-card">
            <img className="officer-portrait" src="https://placehold.it/200x200" alt="officer portrait"></img>
            <p>example name</p>
            <p>example position</p>
        </div>
    );
}