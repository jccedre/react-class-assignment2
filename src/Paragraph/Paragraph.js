import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: ${props => props.theme.colors.black};
  width: 100%;
`;


const Paragraph = (props) => {
  return (
    <StyledParagraph>
      {props.children}
    </StyledParagraph>
  )
};

export default Paragraph;
