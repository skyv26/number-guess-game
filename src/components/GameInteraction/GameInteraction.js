import React, { useState } from 'react';
import FlexContainer from '../../UI/FlexContainer';
import './GameInteraction.css';
import GameInteractionCPU from './GameInteractionCPU/GameInteractionCPU';
import GameInteractionPlayer from './GameInteractionPlayer/GameInteractionPlayer';
import GameContext from '../../store/game-context';
import { useEffect } from 'react';

const GameInteraction = (props) => {
    const contextData = {
        playerCurrentScore: 140,
        chancesLeft: 3,
        highScore: 250,
        randomNumber: 0,
        minGuessNumber: 0,
        maxGuessNumber: 0,
        msg: "Waiting ...",
    };
    const [contextState, updatedState] = useState(contextData);
    const [winStatus, updateWinStatus] = useState(false);

    const randomGenerator = () => {
        let anyRandomNumber = Math.floor(Math.random() * 500);
        let minNum=anyRandomNumber;
        let maxNum=minNum + 15;
        let randomNum=Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

        updatedState(
            (prev) => {
                return {
                    ...prev,
                    minGuessNumber: minNum,
                    maxGuessNumber: maxNum,
                    randomNumber: randomNum
                }
            });
        }

        useEffect(() => {
            randomGenerator();
        }, []);

        return (

            <FlexContainer styleName='gameContainer'>
                <GameContext.Provider value={{ contextState, updatedState }} >
                    <GameInteractionCPU gameWinStatus={winStatus} />
                    <GameInteractionPlayer contextRandomNumber={randomGenerator} gameWinStatus={{winStatus, updateWinStatus}} />
                </GameContext.Provider>
            </FlexContainer>
        );
    }

    export default GameInteraction;