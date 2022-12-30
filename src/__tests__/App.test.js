import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
// COMPONENTS //////////
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

//this scope uses shallow rendering for quicker unit testing
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  })
  
  test('render EventList component', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  })

  test('render CitySearch component', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  })

  test('render NumberOfEvents component', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })
});

// this scope uses full rendering for integration testing
describe('<App /> integration', () => {
  let AppWrapper, AppEventsState;
  beforeAll(() => {
    AppWrapper = mount(<App />);
    AppEventsState = AppWrapper.state('events');
  })

  test('<App /> passes "events" state as a prop to <EventList />', () => {
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  })

});