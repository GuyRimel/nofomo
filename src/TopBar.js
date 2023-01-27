import React, { Component } from "react";
import { InfoAlert } from './Alert';
import ThemeChanger from "./ThemeChanger";

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
        <InfoAlert text={this.state.infoText} />
        <h1>NOFOMO</h1>
        <h3 className="subtitle text-white">No Fear Of Missing Out!</h3>
        <ThemeChanger />
      </div>
    );
  }
}

export default TopBar;
