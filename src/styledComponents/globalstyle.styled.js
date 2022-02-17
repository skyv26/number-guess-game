import {createGlobalStyle, css} from 'styled-components';

const resetInitial = css`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;


const GlobalStyle = createGlobalStyle`

    * {
        ${resetInitial}

        &::after{
            ${resetInitial}
        }

        &::before {
            ${resetInitial}
        }
    }


    html {
        height: 100%;
        font-size: 62.5%;
        background-color: black;
    }
    
    body {
        width: 100%;
        min-height: 100%;
        max-width: 500px;
        margin: auto;
        background-color: white;
        font-family: 'Jura', sans-serif;
    }

`;

export default GlobalStyle;