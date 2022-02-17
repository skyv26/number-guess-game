import React from "react";
import { Container } from "../styledComponents/styledComponents.styled";

const FlexContainer = (props) => {
    return(
        <Container className={props.styleName}>
            {props.children}
        </Container>
    );
}

export default FlexContainer;