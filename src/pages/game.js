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
    width 1440px;
    height: 720px;
    margin: auto;
    margin-top: 10vh;
    background-color: red;
    position: relative;
`;