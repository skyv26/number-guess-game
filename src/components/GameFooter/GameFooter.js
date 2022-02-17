import React from 'react';
import { Footer, AnchorLink } from '../../styledComponents/styledComponents.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './GameFooter.css';

const GameFooter = (props) => {
    return (
        <Footer className='gameFooter'>
            <p className='gameFooter-p'>Made with <FontAwesomeIcon icon={faHeart} /> By <AnchorLink href="#" className='gameFooter-p--link'>Skyv26</AnchorLink></p>
        </Footer>
    );
}

export default GameFooter;