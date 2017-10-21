import React, { Component } from 'react';
import AgeStats from './AgeStats';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate : '',
      birthday: '1999-09-09',
      showStats: false
    }
  }

  changeBirthday() {
    console.log('this state', this.state);
    this.setState({ birthday: this.state.newDate,  showStats : true });   
  }
  
  render() {
    return(
      <div className="App">
        <Form inline>
        <h1 className = "App-title">wprowadź datę urodzin</h1>
          <FormControl 
          type="date"
          onChange = {event => this.setState({ newDate: event.target.value })}
          >
          </FormControl>
          {' '}
          <Button onClick = {() => this.changeBirthday()}>sprawdź!</Button>
          {
            this.state.showStats ? 
            <div className = "fade age-stats">
              <AgeStats date = {this.state.birthday} />
            </div>            
            :
            <div></div>            
          }
        </Form>        
      </div>
    )
  }
}

export default App;