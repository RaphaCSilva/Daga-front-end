import React, {useState} from "react";
import useEventListener from '@use-it/event-listener';
import OrcDownWalk from "./orc/orcDownWalk";
import OrcUpWalk from "./orc/orcUpWalk";
import OrcLeftWalk from "./orc/orcLeftWalk";
import OrcRightWalk from "./orc/orcRightWalk";

export default function Player(props){

    const [posX, setPosX] = useState(1);
    const [posY, setPosY] = useState(1);
    const [direction, setDirection] = useState('right');

    useEventListener('keydown', (event) => {
        if(event.key === 'd'){
            setPosX(posX+1);
            setDirection('right');
        }
        if(event.key === 'a'){
            setPosX(posX-1);
            setDirection('left');
        }
        if(event.key === 'w'){
            setPosY(posY+1);
            setDirection('up');
        }
        if(event.key === 's'){
            setPosY(posY-1);
            setDirection('down');
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
                left: `${(posX*2.5)-2.5}%`,
                transition: 'all 500ms'
            }}
        >
            {(direction === 'right')? <OrcRightWalk/> : 
                (direction === 'left')? <OrcLeftWalk/> :
                    (direction === 'up')? <OrcUpWalk/> : 
                        (direction === 'down')? <OrcDownWalk/> : ''
            }
        </div>
    )
}