import React, { useState } from 'react';

export const Officers: React.FC = () => {

    const eboard: JSX.Element[] = [
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />
    ];

    const jboard: JSX.Element[] = [
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />,
        <OfficerCard />
    ];

    const dboard: JSX.Element[] = [
        <OfficerCard />,
        <OfficerCard />
    ];

    // hook with an initial state as the e board
    const [selectedOfficersGroup, setSelectedOfficersGroup] = useState(eboard);

    // hook to keep track of the active group that helps in toggleOfficerGroup()
    const [selectedOfficersGroupName, setSelectedOfficersGroupName] = useState('eboard');

    function toggleOfficerGroup(event: any) {
        const list: NodeListOf<HTMLElement> = document.querySelectorAll('ul.officer-group-toggle-container li');
        switch (selectedOfficersGroupName) {
            case 'eboard':
                list[0].classList.remove('active');
                break;
            case 'jboard':
                list[1].classList.remove('active');
                break;
            case 'dboard':
                list[2].classList.remove('active');
                break;
            default:
                list[0].classList.remove('active');
                break;
        }

        event.target.classList.add('active');
        switch (event.target.innerText) {
            case 'E-Board':
                setSelectedOfficersGroup(eboard);
                setSelectedOfficersGroupName('eboard');
                break;
            case 'J-Board':
                setSelectedOfficersGroup(jboard);
                setSelectedOfficersGroupName('jboard');
                break;
            case 'D-Board':
                setSelectedOfficersGroup(dboard);
                setSelectedOfficersGroupName('dboard');
                break;
            default:
                setSelectedOfficersGroup(eboard);
                setSelectedOfficersGroupName('eboard');
                break;
        }
    }

    return (
        <div>
            <div className="officers-header">
                <h1 style={{marginLeft: "2%"}}>Meet the...</h1>
                <ul className="officer-group-toggle-container">
                    <li className="officer-group-toggle active" onClick={toggleOfficerGroup}>E-Board</li>
                    <li className="officer-group-toggle" onClick={(e) => toggleOfficerGroup(e)}>J-Board</li>
                    <li className="officer-group-toggle" onClick={toggleOfficerGroup}>D-Board</li>
                </ul>
            </div>
            <div className="highlight"></div>
            <div className="officers-container">
                {
                    selectedOfficersGroup.map((item: JSX.Element, index: number) => {
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