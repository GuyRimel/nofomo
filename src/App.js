import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
// COMPONENTS //////////
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import TopBar from './TopBar';
import { InfoAlert } from './Alert';
// DATA / FUNCS //////////
import { getEvents, extractLocations } from './api';


class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: 'all',
    eventCount: 32,
    // infoText: ''
  }
  
  networkStatus = () => {
    this.setState({infoText: navigator.online ? 'online' : 'offline'})
  };
  
  async componentDidMount() {
    this.mounted = true;
    window.addEventListener('online', this.networkStatus);
    window.addEventListener('offline', this.networkStatus);
    
    getEvents().then((events) => {
      if (this.mounted) {
        events=events.slice(0,this.state.eventCount);
        this.setState({ events, locations: extractLocations(events) });
        this.networkStatus();
      }
    });
  }

  componentWillUnmount(){ this.mounted = false; }

  updateEvents = (location, inputNumber) => {
    const {eventCount, seletedLocation} = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        const eventsToShow=locationEvents.slice(0, eventCount);
        this.setState({
        events: eventsToShow,
        seletedLocation: location
        });
      });  
    } else {
      getEvents().then((events) => {
        const locationEvents = (seletedLocation === 'all') ?
        events :
        events.filter((event) => event.location === seletedLocation);
        const eventsToShow=locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          eventCount: inputNumber
        });
      })
    }
  }

  render() {
    return (
      <div className="App">
        <InfoAlert text={this.state.infoText} />
        <TopBar />
        <div className="filter-box">
          <CitySearch
            locations={this.state.locations}
            updateEvents= {this.updateEvents}
          />
          <NumberOfEvents
            eventCount={this.state.eventCount}
            updateEvents={this.updateEvents}
          />
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;