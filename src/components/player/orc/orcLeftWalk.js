import React from "react";
import Spritesheet from 'react-responsive-spritesheet';
import '../../../assets/css/style.css';

export default function OrcLeftWalk(props){

    return(
        <Spritesheet
            className={'spriteClass'}
            image = {`https://github.com/RaphaCSilva/Daga-front-end/blob/main/src/assets/sprites/walkLeft.png?raw=true`}
            widthFrame={64}
            heightFrame={43}
            steps={9}
            fps={9}
            loop = {true}
        />
    )
}