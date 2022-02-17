import React, {useContext} from 'react';
import styled from 'styled-components';
import { Container } from '../../../styledComponents/styledComponents.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFighterJet, faHandHoldingHeart, faTrophy, faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import FlexContainer from '../../../UI/FlexContainer';
import './GameInteractionCPU.css';
import GameContext from '../../../store/game-context';

const GameStatusContainer = styled(Container)``;

const GameInteractionCPU = (props) => {
    const ctx = useContext(GameContext);
    
    return (
        <GameStatusContainer className='gameStatusContainer'>
            <FlexContainer styleName={`gameStatusContainer-secretNumberBox ${!ctx.contextState.chancesLeft || props.gameWinStatus ? 'highlight' : ''}`}>
                <FontAwesomeIcon icon={faDharmachakra} className={`gameStatusContainer-secretNumberBox--icon ${!ctx.contextState.chancesLeft || props.gameWinStatus ? 'disabled' : ''}`} />
                <p className={`gameStatusContainer-secretNumberBox--secretNumber ${!ctx.contextState.chancesLeft  || props.gameWinStatus ? '' : 'disabled'}`}>{ctx.contextState.randomNumber}</p>
            </FlexContainer>
            <FlexContainer styleName='gameStatusContainer-display'>
                <p className='gameStatusContainer-display--p'><FontAwesomeIcon icon={faFighterJet} className='gameStatusContainer-display--p_icon' /> Your Score: {ctx.contextState.playerCurrentScore}</p>
                <p className='gameStatusContainer-display--p'><FontAwesomeIcon icon={faHandHoldingHeart} className='gameStatusContainer-display--p_icon' /> Chances Left: {ctx.contextState.chancesLeft}</p>
                <p className='gameStatusContainer-display--p'><FontAwesomeIcon icon={faTrophy} className='gameStatusContainer-display--p_icon' /> Highest Score: {ctx.contextState.highScore}</p>
            </FlexContainer>
        </GameStatusContainer>
    );
}

export default GameInteractionCPU;