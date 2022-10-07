import React from "react";
import styled from 'styled-components'

export default function Game() {

    const arr = [];
    for(let i = 0; i <= 100; i++){
        arr.push(i);
    }
    const abre = "{"
    const string = "position: absolute;"
    const fecha = "}"
    return (
        <>
            <GameScreen>
                <div className="X13 Y10">

                </div>
            </GameScreen>
        </>
    );
}

const GameScreen = styled.div`
    width 600px;
    height: 500px;
    margin: auto;
    margin-top: 10%;
    background-color: red;
    position: relative;

    div{
        width: 100px;
        height: 100px;
        background-color: blue;
    }
`;