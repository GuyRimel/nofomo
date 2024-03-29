import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = { noe: 32, errorText: '' }

  handleInputChanged = (event, props) => {
    let inputValue = event.target.value;
    let errText;

    // don't even allow negative numbers; come on now.
    if(inputValue < 0 || inputValue === 0 || inputValue === "0") inputValue = 0;
    if(!inputValue) errText = '# of events is zero';
    else if(inputValue >= 50) {
      errText = 'The maximumum is 50.';
      inputValue = 50;
    }
    this.props.updateEvents(null, inputValue);
    this.setState({ noe: inputValue, errorText: errText });
  }
  
  render() {
    const { noe } = this.state;
    return (
    <div className="NumberOfEvents">
        <h3># of Events:</h3>
        <input
          className="noe-input"
          type="number"
          value={noe}
          onChange={event => {
            this.handleInputChanged(event);
          }}
        />
        <ErrorAlert text={this.state.errorText} />
    </div>
    )
  }
}

export default NumberOfEvents;