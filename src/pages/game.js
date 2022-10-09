import React, {useState} from "react";
import styled from 'styled-components'
import Player from "../components/player";
import Square from "../components/square";
import Monster from "../components/monster";
import Target from "../components/target";

export default function Game() {
    let arr = [];
    let Y = 20;
    for(let i = 1; i <=40; i++){
        arr.push({X: i, Y});
        if(i%40 === 0){
         Y--;
         if(Y>=1){
            i=0;
         }   
        }
    }

    const [target, setTarget] = useState(undefined);

    const randomMonsterSimulation = [ 
        { name: "Jabuti", posX: 9, posY: 16, life: 300, maxLife: 300}, 
        { name: "Javali", posX: 12, posY: 18, life: 200, maxLife: 300}, 
        { name: "Passarinho", posX: 15, posY: 19, life: 100, maxLife: 300} 
    ]

    function changeTarget(monster){
        setTarget(monster);
    }

    return (
        <>
            <GameScreen>
                <Player/>
                {(target !== undefined) ? <Target name = {target.name} maxLife = {target.maxLife} life = {target.life}/> : ''}
                {arr.map((num, index) => <Square key = {index} X = {num.X} Y = {num.Y}/>)}
                {randomMonsterSimulation.map((monster, index) => 
                    <Monster 
                        key = {index} 
                        name = {monster.name}
                        posX = {monster.posX} 
                        posY = {monster.posY} 
                        life = {monster.life} 
                        maxLife = {monster.maxLife}
                        clicked = {changeTarget}
                    />
                )}
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
    display: flex;
    flex-wrap: wrap;
`;