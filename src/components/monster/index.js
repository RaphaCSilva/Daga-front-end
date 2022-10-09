import React, {useEffect, useState} from "react";

export default function Monster(props){

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [firstMovement, setFirstMovemant] = useState(false)

    function numbergenerator(pos){
        const max = pos + 1;
        const min = pos -1;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(randomNumber);
        return randomNumber;
    }

    function movimentation(){
        setFirstMovemant(true);
        setPosX(numbergenerator(props.posX));
        setPosY(numbergenerator(props.posY));
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            movimentation();
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return(
        <div
            style={{
                position: 'absolute',
                width: '2.5%',
                height: '5%',
                backgroundColor: 'red',
                bottom: `${firstMovement ? ((posY * 5)-5) : (props.posY * 5)-5}%`,
                left: `${firstMovement ? ((posX * 2.5)-2.5): (props.posX * 2.5)-2.5}%`,
                transition: 'all 500ms'
            }}
        />
    )
}