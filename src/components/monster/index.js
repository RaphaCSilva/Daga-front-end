import React, {useEffect, useState} from "react";
import MonsterLifeBar from "./monsterLifeBar";

export default function Monster(props){

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [firstMovement, setFirstMovemant] = useState(false)

    function numbergenerator(pos){
        const max = pos + 1;
        const min = pos -1;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
    }

    function movimentation(){
        setFirstMovemant(true);
        setPosX(numbergenerator(props.posX));
        setPosY(numbergenerator(props.posY));
    }

    function lifeToPercent(life){
        return (100 * life) / props.maxLife
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            movimentation();
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    function sendTarget(){
        props.clicked(props);
    }

    return(
        <div onClick={sendTarget}
            style={{
                position: 'absolute',
                width: '2.5%',
                height: '5%',
                backgroundColor: 'red',
                cursor: 'pointer',
                bottom: `${firstMovement ? ((posY * 5)-5) : (props.posY * 5)-5}%`,
                left: `${firstMovement ? ((posX * 2.5)-2.5): (props.posX * 2.5)-2.5}%`,
                transition: 'all 500ms'
            }}
        >
            <span 
                style={{
                    position: 'absolute',
                    top: '-100%',
                    fontWeight: 'bold',
                    color: 'yellow'
                }}
            >
                {props.name} 
            </span>
            <MonsterLifeBar life = {props.life} maxLife = {props.maxLife}/>
        </div>
    )
}