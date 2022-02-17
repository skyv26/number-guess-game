import React, {Fragment} from 'react';
import GlobalStyle from './styledComponents/globalstyle.styled';
import { MainContainer } from './styledComponents/styledComponents.styled';
import './AppStyles/App.css';
import GameHeader from './components/GameHeader/GameHeader';
import GameInteraction from './components/GameInteraction/GameInteraction';
import GameFooter from './components/GameFooter/GameFooter';

const App = (props) => {
  return (
    <Fragment>
      <GlobalStyle />
        <MainContainer className='main'>
          <GameHeader />
            <GameInteraction />
          <GameFooter />
        </MainContainer>
    </Fragment>
  );
}

export default App;