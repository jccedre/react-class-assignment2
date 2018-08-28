import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { main } from './Styles/Main';
import Input from './Input/Input';
import Paragraph from './Paragraph/Paragraph';
import Validation from './Validation/Validation';
import Char from './Char/Char';

const StyledApp = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 75em;
  width: 100%;
  padding: 1em;
  margin: 1em;

  div {
    padding: 1em;
  }
`;

class App extends Component {

  state = {
    userInput: '',
    textLength: null,
    inputSplit: [],
  }

  inputChangedHandler = ( event ) => {
    this.setState({
      userInput: event.target.value,
      textLength: event.target.value.length,
      inputSplit: event.target.value.split(''),
    })
  }

  deleteInputHandler = ( charIndex ) => {
    const inputSplit = [...this.state.inputSplit];
    inputSplit.splice(charIndex, 1);
    this.setState({
      userInput: inputSplit.join(''),
      inputSplit: inputSplit,
      textLength: inputSplit.join('').length,
    });
  }



  render() {

    let chars = null;
    chars = (
      <div>
          {this.state.inputSplit.map((char, index) => {
            return <Char
              click={() => this.deleteInputHandler(index)}
              key={char+index}
              >{char}</Char>
          })}
      </div>
    );

    return (
      <ThemeProvider theme={main}>
        <StyledApp>
          <Input changed={this.inputChangedHandler} value={this.state.userInput}></Input>
          <Paragraph>{this.state.userInput}</Paragraph>
          <Validation value={this.state.textLength}></Validation>
          {chars}
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
