import React from 'react';
import styled from 'styled-components';

const StyledChar = styled.p`
  display: inline-flex;
  padding: 1em;
  text-align: center;
  margin: 1em;
  border: 1px solid ${props => props.theme.colors.green};
  cursor: pointer;
  transition: border 0.3s;


  &:hover,
  &:focus {
    border: 1px solid red;
  }
`;

const char = ( props ) => {
  return (
    <StyledChar onClick={props.click}>{props.children}</StyledChar>
  )
}

export default char;
