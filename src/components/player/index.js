import React, {useState} from "react";
import useEventListener from '@use-it/event-listener';
import Orc from "./orc";

export default function Player(props){

    const [posX, setPosX] = useState(1);
    const [posY, setPosY] = useState(1);

    useEventListener('keydown', (event) => {
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
        if(event.key === '1'){
          simpleAttack();
        }
    });

    function simpleAttack(){
        if(props.target === undefined){
            return alert('não tenho um alvo');
        }
        if(props.target.posX > (posX +1) || props.target.posX < (posX-1)){
            return alert('fora do alcance');
        }
        if(props.target.posY > (posY +1) || props.target.posY < (posY-1)){
            return alert('fora do alcance');
        }
        const attack = {
            name: 'simpleAttack',
            damage: 50
        }
        props.attack(props.target, attack);
    }

    return(
        <div
            style={{
                position: 'absolute',
                width: '2.5%',
                height: '5%',
                bottom: `${(posY*5)-5}%`,
                left: `${(posX*2.5)-2.5}%`
            }}
        >
            <Orc/>
        </div>
    )
}