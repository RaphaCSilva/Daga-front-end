import React, {useState} from "react";
import styled from 'styled-components'
import Player from "../components/player";

export default function Game() {

    return (
        <>
            <GameScreen>
                <Player/>
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