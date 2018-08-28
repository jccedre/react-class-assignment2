import React from 'react';
import styled from 'styled-components';

const StyledValidation = styled.p`
  color: ${props => props.theme.colors.red};
  font-size: 1.2em;
  width: 100%;
  text-align: center;
`

const Validation = ( props ) => {
  const textTooShort = 'Text is too short';
  const textTooLong = 'Text is too long';
  return (
    <StyledValidation value={props.value}>
      { (props.value > 10) ? textTooLong : textTooShort  }
    </StyledValidation>
  )
}

export default Validation;
