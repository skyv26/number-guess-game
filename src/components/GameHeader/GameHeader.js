import React from 'react';
import { Header, Image, Button } from '../../styledComponents/styledComponents.styled';
import MobileGameLogo from '../../assests/images/mobile-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './GameHeader.css';

const GameHeader = (props) => {
    return (
        <Header className='header'>
            <Image src={MobileGameLogo} alt='' />
            <Button className="header-menuBtn">
                <FontAwesomeIcon icon={faBars} />
            </Button>
        </Header>
    );
}

export default GameHeader;