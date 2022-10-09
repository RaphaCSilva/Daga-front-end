import React, {useEffect, useState} from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import '../../assets/css/style.css'

export default function TargetLifeBar(props){

    function lifeToPercent(life){
        return (100 * life) / props.maxLife
    }

    return(
        <ProgressBar 
            borderRadius="0px"
            width= '55%' 
            margin = '10% 40%' 
            customLabel={`${props.life}hp / ${props.maxLife}hp`}
            labelClassName = "label"
            completed = {lifeToPercent(props.life)}
        />
    )
}