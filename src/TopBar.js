import React, { Component } from "react";
import { InfoAlert } from './Alert';
import { ThemeChangerUp } from "./ThemeChanger";

class TopBar extends Component {
  state = { infoText: ''}

  networkStatus = () => {
    this.setState({infoText: navigator.online ? 'online' : 'offline'})
  };

  async componentDidMount() {
    window.addEventListener('online', this.networkStatus);
    window.addEventListener('offline', this.networkStatus);
    this.networkStatus();
  }

  render() {
    return (
      <div className="TopBar">
        <div className="utilities">
          <InfoAlert text={this.state.infoText} />
        </div>
        <div className="title">
          <h1>NOFOMO&nbsp;</h1>
          <ThemeChangerUp />
        </div>
        <h3 className="subtitle text-white">No Fear Of Missing Out!</h3>
      </div>
    );
  }
}

export default TopBar;
