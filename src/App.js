import React, { Component } from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './App.css';
import './nprogress.css';
// COMPONENTS //////////
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import TopBar from './TopBar';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
// DATA / FUNCS //////////
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: 'all',
    eventCount: 32,
    showWelcomeScreen: undefined
    // infoText: ''
  }
  
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });

    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    
    // --primary-hue is defined in App.css and utilized in ThemeChanger
    let hue = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-hue');

    const { locations, eventCount, events, showWelcomeScreen } = this.state;
    return (
      <div className="App">
        <TopBar />
        <div className="filter-box">
          <CitySearch
            locations={locations}
            updateEvents= {this.updateEvents}
          />
          <NumberOfEvents
            eventCount={eventCount}
            updateEvents={this.updateEvents}
          />
        </div>
        <h4 className="text-center text-splash">Events by City</h4>

        <div className='data-vis-wrapper'>
          <ResponsiveContainer height={400} >
            <EventGenre events={events} />
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" stroke='white' />
              <YAxis
                stroke='white'
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill={`hsl(${hue}, 100%, 90%)`} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>


        <EventList events={events} />
        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          // showWelcomeScreen={false}
          getAccessToken={() => { getAccessToken() }}
        />
      </div>
    );
  }
}

export default App;