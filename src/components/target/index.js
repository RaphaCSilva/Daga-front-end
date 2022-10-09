import React from "react";
import styled from "styled-components";
import TargetLifeBar from "./targetLifeBar";

export default function Target(props){

    return ( 
        <>
            <TargetBox>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '30%',
                    height: '75%',
                    backgroundColor: 'blue'
                }}/>
                <span>
                    Javali
                </span>
                <TargetLifeBar life = {300} maxLife = {450} />
                
            </TargetBox>
        </>
    )
}

const TargetBox = styled.div`
    position: absolute;
    width: 20%;
    height: 15%;
    background-color: grey;

`