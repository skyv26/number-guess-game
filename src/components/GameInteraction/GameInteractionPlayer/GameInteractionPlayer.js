import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Container, UserInput, Button } from '../../../styledComponents/styledComponents.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faRedo } from '@fortawesome/free-solid-svg-icons';
import FlexContainer from '../../../UI/FlexContainer';
import './GameInteractionPlayer.css';
import GameContext from '../../../store/game-context';


const GamePlayerContainer = styled(Container)``;

const GameInteractionPlayer = (props) => {
    const ctx = useContext(GameContext);
    const playerGuessRef = useRef('');
    
    const guessCheckHandler = (check = true) => {
        const userGuess = Number(playerGuessRef.current.value);
        if (check) {
            if (userGuess === ctx.contextState.randomNumber) {
                props.gameWinStatus.updateWinStatus(true);
                ctx.updatedState((prev) => {
                    return {
                        ...prev,
                        msg: "!! You Win !!"
                    }
                });
                return;
            } else if (userGuess < ctx.contextState.randomNumber) {
                ctx.updatedState((prev) => {
                    return {
                        ...prev,
                        msg: "!! Too Low !!"
                    }
                });
            }

            else if (userGuess > ctx.contextState.randomNumber) {
                ctx.updatedState((prev) => {
                    return {
                        ...prev,
                        msg: "!! Too High !!"
                    }
                });
            }

            ctx.updatedState((prev) => {
                if(prev.chancesLeft <=1 ){
                    ctx.updatedState((prev) => {
                        return {
                            ...prev,
                            msg: "!! You Lose !!"
                        }
                    });
                }
                return {
                    ...prev,
                    chancesLeft: prev.chancesLeft - 1
                }
            });

        } else {
            playerGuessRef.current.value = '';
            props.gameWinStatus.updateWinStatus(false);
            props.contextRandomNumber();
            ctx.updatedState((prev) => {
                return {
                    ...prev,
                    chancesLeft: 3,
                    msg: "Waiting ..."
                }
            });
        }
    };

    return (
        <GamePlayerContainer className='gamePlayer'>
            <p className='gamePlayer-msg'>{ctx.contextState.msg}</p>
            <FlexContainer styleName='gamePlayer-InnerContainer'>
                <p className='gamePlayer-InnerContainer--randomNumber'>Between (<span className='gamePlayer-InnerContainer--randomNumber_lower'>{ctx.contextState.minGuessNumber}</span> - <span className='gamePlayer-InnerContainer--randomNumber_higher'>{ctx.contextState.maxGuessNumber}</span>)</p>
                <FlexContainer styleName='gamePlayer-InnerContainer--Interaction'>
                    <UserInput placeholder='Enter your guess...' type="number" className='gamePlayer-InnerContainer--Interaction_input' disabled={!ctx.contextState.chancesLeft || props.gameWinStatus.winStatus} ref={playerGuessRef} />
                    <FlexContainer styleName='gamePlayer-InnerContainer--Interaction_btnContainer'>
                        <Button className='btn gamePlayer-InnerContainer--Interaction_btnContainer--restart' onClick={() => guessCheckHandler(false)}><FontAwesomeIcon icon={faRedo} className='gamePlayer-InnerContainer--Interaction_btnContainer--restart-icon' /></Button>
                        <Button className='btn gamePlayer-InnerContainer--Interaction_btnContainer--check' disabled={!ctx.contextState.chancesLeft || props.gameWinStatus.winStatus} onClick={guessCheckHandler}><FontAwesomeIcon icon={faGem} className='gamePlayer-InnerContainer--Interaction_btnContainer--check-icon' />Check</Button>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </GamePlayerContainer>
    );
}

export default GameInteractionPlayer;