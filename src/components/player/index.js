import React, {useState} from "react";
import useEventListener from '@use-it/event-listener';

export default function Player(props){

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    useEventListener('keydown', (event) => {
        if(event.key === 'd'){
            setPosX(posX+2.5);
        }
        if(event.key === 'a'){
            setPosX(posX-2.5);
        }
        if(event.key === 'w'){
            setPosY(posY+5);
        }
        if(event.key === 's'){
            setPosY(posY-5);
        }
    });

    return(
        <div
            style={{
                position: 'absolute',
                width: '5%',
                height: '10%',
                backgroundColor: 'blue',
                bottom: `${posY}%`,
                left: `${posX}%`
            }}
        />
    )
}