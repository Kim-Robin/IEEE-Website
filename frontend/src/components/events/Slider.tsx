import React, { useState } from 'react';

// import fox from './fox.jpg';

// import left_arrow from './left_arrow.svg';
// import right_arrow from './right_arrow.svg';

// const logo: any = require('./fox.jpg');

export const Slider: React.FC = () => {
    let events: JSX.Element[] = [
        <EventComponent src={require('./fox.jpg')} />,
        <EventComponent src={"./cute_thing.jpg"} />,
        <EventComponent src={"./moose.jpg"} />,
        <EventComponent src={"./monkey.jpg"} />,
        <EventComponent src={"./chameleon.jpg"} />
    ];

    const [x, setX] = useState(0);

    const goLeft: () => void = function (): void {
        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        // use 0.15 because margin left and margin right are 15%, and use 0.25 because each slide's width is 25%
        x === 0 ? setX(-((2 * browserWidth * 0.15) + (0.25 * browserWidth)) * (events.length - 1)) : setX(x + ((2 * browserWidth * 0.15) + (0.25 * browserWidth)));
    };

    const goRight = function(): void {
        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        
        // use 0.15 because margin left and margin right are 15%, and use 0.25 because each slide's width is 25%
        x === -((2 * browserWidth * 0.15) + (0.25 * browserWidth)) * (events.length - 1) ? setX(0) : setX(x - ((2 * browserWidth * 0.15) + (0.25 * browserWidth)));
    };

    return (
        <div>
            <div id="slider-header">
                <h1>Events</h1>
            </div>
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

interface EventComponentProps {
    src: string;
}

const EventComponent: React.FC<EventComponentProps> = ({src}) => {

    const imgStyles = {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    };

    //const image: any = require(src);
    console.log(src);
    console.log(typeof(src));
    console.log(src.valueOf());
    //console.log(fox);
    //console.log(logo);
    //console.log(src.default);
    
    return (
        <div style={{height: "100%", textAlign: "center"}}>
            <div style={{height: "60%"}}>
                {/*<img width="400" height="400" src="https://placehold.it/400x400" alt="slide-img" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>*/}
                {/*<img width="400" height="400" src={require(src)} alt="slide-img" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>*/}
                {/*<img width="400" height="400" src={String(image)} alt="slide-img" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>*/}
                <img width="400" height="400" src={src} alt="slide-img" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>
            </div>
            <div style={{height: "40%"}}>
                <p>Title</p>
                <p>Date</p>
            </div>
        </div>
    );   
}