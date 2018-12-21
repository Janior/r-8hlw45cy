import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
       checked: false 
  } 
 
  handleInput = this.handleInput.bind(this); 
 
  handleInput (prevState) { 
       console.log(prevState.value) 
       this.setState({ 
         checked:!prevState.checked 
       }) 
  } 

  render() {
    return (
     <div className="wrapper"> 
         <label><input type="checkbox" onChange={this.handleInput} value= {false} /> Mostrar información importante</label> 
         { 
           this.state.checked === true ? 
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
             : false 
         } 
     </div> 
    );
  }
}

export default App;
