import React, {useState, useEffect} from 'react';
import './typeit.css';

type Props = {
    className: string;
    phrase: string;
    delay: number;
}

const Typeit:React.FC<Props> = ({className, phrase, delay}) => {
    
    const [text, setText] = useState("");

    const phraseArray = phrase.split('');
    var index = 0
    const timeout = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const typingAnimation = () => {
        if(index < phraseArray.length){
            document.getElementsByClassName("word")[0].innerHTML += phraseArray[index];
            index++;
            setTimeout(typingAnimation, delay);
            
        }
    }

    useEffect(()=>{
        typingAnimation();
    }, [])

    return(
        <div className={className}>
            <div className="wordColumn">
                <h1 className="word"></h1>
            </div>
        </div>
    );
}

export default Typeit;
