import React, {useState} from "react";
import useEventListener from '@use-it/event-listener';

export default function Player(props){

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    useEventListener('keydown', (event) => {
        console.log(event.key);
        if(event.key === 'd'){
            setPosX(posX+1);
        }
        if(event.key === 'a'){
            setPosX(posX-1);
        }
        if(event.key === 'w'){
            setPosY(posY+1);
        }
        if(event.key === 's'){
            setPosY(posY-1);
        }
    });

    return(
        <div className={`X${posX} Y${posY}`}>

        </div>
    )
}