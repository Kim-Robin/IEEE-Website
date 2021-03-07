import React, { useEffect, useState } from 'react';
import { Members } from '../../../../backend/src/model/members';
import * as officers from './fetchOfficers';

export const Officers: React.FC = () => {

    // simulate componentDidMount(), do axios call:
    useEffect(() => {
        function makeOfficerCards(data: any) {
            let fetchedOfficers: JSX.Element[] = [];
            console.log(fetchedOfficers);
            data.map((item: Members) => {
                fetchedOfficers.push(<OfficerCard
                    id={item.id}
                    first_name={item.first_name}
                    last_name={item.last_name}
                    role={item.role}
                    position={item.position}
                    linkedIn={item.linkedIn}
                    start_year={item.start_year}
                    end_year={item.end_year}
                    image={item.image}
                />);
            });
            return fetchedOfficers;
        }

        officers.fetchEboard().then(eboard => {
            const eboardCards = makeOfficerCards(eboard);
            setEboard(eboardCards);
            setSelectedOfficersGroup(eboardCards);
        });

        officers.fetchJboard().then(jboard => {
            const jboardCards = makeOfficerCards(jboard);
            setJboard(jboardCards);
        });

        officers.fetchDboard().then(dboard => {
            const dboardCards = makeOfficerCards(dboard);
            setDboard(dboardCards);
        });
    }, []);

    const [eboard, setEboard] = useState([<OfficerCard
        id={-1}
        first_name={""}
        last_name={""}
        role={""}
        position={""}
        linkedIn={""}
        start_year={0}
        end_year={0}
        image={""}
    />]);

    const [jboard, setJboard] = useState([<OfficerCard
        id={-1}
        first_name={""}
        last_name={""}
        role={""}
        position={""}
        linkedIn={""}
        start_year={0}
        end_year={0}
        image={""}
    />]);

    const [dboard, setDboard] = useState([<OfficerCard
        id={-1}
        first_name={""}
        last_name={""}
        role={""}
        position={""}
        linkedIn={""}
        start_year={0}
        end_year={0}
        image={""}
    />]);

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
        <div id="officers-component">
            <div id="main-container">
                <div className="officers-header">
                    <h1 style={{marginLeft: "2%"}}>Meet the...</h1>
                    <ul className="officer-group-toggle-container">
                        <li className="officer-group-toggle active" onClick={toggleOfficerGroup}>E-Board</li>
                        <li className="officer-group-toggle" onClick={(e) => toggleOfficerGroup(e)}>J-Board</li>
                        <li className="officer-group-toggle" onClick={toggleOfficerGroup}>D-Board</li>
                    </ul>
                </div>
                <div className="officers-highlight"></div>
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
        </div>
    );
}

const OfficerCard: React.FC<Members> = ({first_name, last_name, role, position, linkedIn, start_year, end_year, image}) => {
    function getPlaceholder(event: any) {
        event.target.src = "http://localhost:5000/members/placeholder";
    }

    return (
        <div className="officer-card">
            <img className="officer-portrait" width="200" src={image} alt="IEEE Officer Portrait" onError={getPlaceholder}></img>
            <div>
                <p>{first_name} {last_name}</p>
                <p>{position}</p>
            </div>
        </div>
    );
}
