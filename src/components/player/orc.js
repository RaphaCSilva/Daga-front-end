import React from "react";
import Spritesheet from 'react-responsive-spritesheet';
import '../../assets/css/walkRight.png';

export default function Orc(props){

    return(
        <Spritesheet
            image = {`../../assets/css/walkRight.png`}
            widthFrame={62}
            heightFrame={43}
            steps={9}
            fps={9}
        />
    )
}