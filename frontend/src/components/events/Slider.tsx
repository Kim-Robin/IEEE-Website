import React, { useState } from 'react';

// import fox from './fox.jpg';

// import left_arrow from './left_arrow.svg';
// import right_arrow from './right_arrow.svg';

// const logo: any = require('./fox.jpg');

export const Slider: React.FC = () => {
    let events: JSX.Element[] = [
        <EventComponent src={''} />,
        <EventComponent src={""} />,
        <EventComponent src={""} />,
        <EventComponent src={""} />,
        <EventComponent src={""} />
    ];

    const [x, setX] = useState(0);

    const goLeft: () => void = function (): void {

        // get the styles from the css so that we don't use 'magin numbers' for the margin and width
        const slide = document.querySelector('.slide') as Element;
        console.log(slide);
        const slideStyles: CSSStyleDeclaration = window.getComputedStyle(slide);
        console.log(slideStyles);

        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        // +x and parseInt both convert string to integer
        // using slice to get rid of px
        const slideMarginLeft: number = +(slideStyles.getPropertyValue('margin-left').slice(0, -2));
        const slideMarginRight: number = parseInt(slideStyles.getPropertyValue('margin-right').slice(0, -2));
        const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width')) / 100;

        //x === 0 ? setX(-((browserWidth * slideMarginLeft + browserWidth * slideMarginRight) + (slideWidth * browserWidth)) * (events.length - 1)) : setX(x + ((browserWidth * slideMarginLeft + browserWidth * slideMarginRight) + (slideWidth * browserWidth)));
        console.log(x)
        x === 0 ? setX(-((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)) * (events.length - 1)) : setX(x + ((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)));
        console.log(slideMarginLeft + slideMarginRight)
        console.log(slideWidth * browserWidth)
        console.log(-((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)))
        console.log(((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)))
        console.log(x + ((slideMarginLeft + slideMarginRight) + (slideWidth * browserWidth)))
        console.log(x)
    };

    const goRight = function(): void {

        // get the styles from the css so that we don't use 'magin numbers' for the margin and width
        const slide = document.querySelector('.slide') as Element;
        const slideStyles: CSSStyleDeclaration = window.getComputedStyle(slide);

        const browserWidth: number = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        
        // +x and parseInt both convert string to integer
        const slideMarginLeft: number = +(slideStyles.getPropertyValue('margin-left'));
        const slideMarginRight = +(slideStyles.getPropertyValue('margin-right'));
        const slideWidth: number = parseInt(slideStyles.getPropertyValue('min-width'));
        
        // use 0.15 because margin left and margin right are 15%, and use 0.25 because each slide's width is 25%
        x === -((browserWidth * slideMarginLeft * slideMarginRight) + (slideWidth * browserWidth)) * (events.length - 1) ? setX(0) : setX(x - ((browserWidth * slideMarginLeft * slideMarginRight) + (slideWidth * browserWidth)));
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
                <p>Example Title</p>
                <p>Example Date</p>
            </div>
        </div>
    );   
}