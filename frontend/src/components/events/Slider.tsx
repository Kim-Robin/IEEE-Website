import React, { useEffect, useState } from 'react';
import { Events } from '../../../../backend/src/model/events';
import fetchEvents from './fetchEvents';

import test from '../../images/event-thumbnails/2020-2021/ieee_0_intro.jpg';

export const Slider: React.FC = () => {

    // simulate componentDidMount(), do axios call
    useEffect(() => {
        (async () => {
            const fetchedEvents = await fetchEvents();
            console.log(fetchedEvents);
            let eventCards: JSX.Element[] = [];
            fetchedEvents.forEach((item: Events) => {
                eventCards.push(
                    <EventComponent 
                        id={item.id}
                        event_name={item.event_name}
                        image={item.image}
                        year={item.year}
                        month={item.month}
                        day={item.day}
                        past_status={item.past_status}
                    />
                );
            });
            setEvents(eventCards);
        })();        
    }, []);

    const [events, setEvents] = useState([<EventComponent 
        id={-1}
        event_name={"N/A"} 
        image={"N/A"}
        year={0}
        month={0}
        day={0} 
        past_status={0}   
    />]);

    const [x, setX] = useState(0);

    const goLeft: () => void = function (): void {

        // get the styles from the css so that we don't use 'magic numbers' for the margin and width
        const slide = document.querySelector('.slide') as Element;
        const slideStyles: CSSStyleDeclaration = window.getComputedStyle(slide);

        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        // +x and parseInt both convert string to integer
        // using slice to get rid of px
        const slideMarginLeft: number = +(slideStyles.getPropertyValue('margin-left').slice(0, -2));
        const slideMarginRight: number = parseInt(slideStyles.getPropertyValue('margin-right').slice(0, -2));
        const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width')) / 100;

        x >= 0 ? setX(-((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)) * (events.length - 1)) : setX(x + ((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)));
    };

    const goRight = function(): void {

        // get the styles from the css so that we don't use 'magic numbers' for the margin and width
        const slide = document.querySelector('.slide') as Element;
        const slideStyles: CSSStyleDeclaration = window.getComputedStyle(slide);

        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        
        // +x and parseInt both convert string to integer
        // using slice to get rid of px
        const slideMarginLeft: number = +(slideStyles.getPropertyValue('margin-left').slice(0, -2));
        const slideMarginRight: number = parseInt(slideStyles.getPropertyValue('margin-right').slice(0, -2));
        const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width')) / 100;
        
        x <= -((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)) * (events.length - 1) ? setX(0) : setX(x - ((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)));
    };

    return (
        <div>
            <div id="slider-header">
                <h1>Events</h1>
            </div>
            <div className="highlight"></div>
            <div className="slider">
                {
                    events.map((item: JSX.Element, index: number) => {
                        return (
                            <div key={index} className="slide" style={{transform:`translateX(${x}px)`}}>
                                {item}
                            </div>
                        )
                    })
                }           
                <button id="goLeft" onClick={goLeft}></button>
                <button id="goRight" onClick={goRight}></button>
            </div>
        </div>
        
    );
};

const EventComponent: React.FC<Events> = ({event_name, image, year, month, day}) => {
    
    return (
        <div style={{height: "100%", textAlign: "center"}}>
            <div style={{height: "60%"}}>
                <img width="400" height="400" src={image} alt="slide-img" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>
            </div>
            <div style={{height: "40%", padding: "10px"}}>
                <p>{event_name}</p>
                <p>{month}/{day}/{year}</p>
            </div>
        </div>
    );   
}