import React, {useEffect, useState} from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function MonsterLifeBar(props){

    function lifeToPercent(life){
        return (100 * life) / props.maxLife
    }
    return(
        <ProgressBar 
            height = '10px' 
            margin = '-50% 0' 
            customLabel={`${props.life}hp`} 
            borderRadius="0px" 
            completed = {lifeToPercent(props.life)}
        />
    )
}