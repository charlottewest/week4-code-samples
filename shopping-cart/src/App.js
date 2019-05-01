import React from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart';
import FlightList from './FlightList';

class App extends React.Component {
  state = {
    flights: [
      'Seattle -> Tokyo',
      'Seattle -> Budapest',
      'Seattle -> Portland',
      'Seattle -> Portland',
      'Seattle -> Portland',
      'Seattle -> Portland',
      'Seattle -> Portland',
      'Seattle -> Los Angeles',
      'Seattle -> Los Angeles',
      'Seattle -> Los Angeles',
      'Seattle -> Los Angeles'
    ],
    selectedFlights: []
  }

  bookFlight = (idx) => {
    const selectedFlight = this.state.flights[idx];
    if (this.state.selectedFlights.includes(selectedFlight)) {
      alert('You already selected that flight.');
      return;
    }
    
    this.setState(prevState => {
      return {
        selectedFlights: [...prevState.selectedFlights, selectedFlight]
      };
    });
  }

  deleteFlight = (idx) => {    
    this.setState(prevState => {
      const selectedFlights = [...prevState.selectedFlights];
      selectedFlights.splice(idx, 1);

      return {
        selectedFlights
      };
    });
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart
          flights={this.state.selectedFlights}
          onDeleteFlight={this.deleteFlight}
        />
        <hr />
        <FlightList
          flights={this.state.flights}
          onBookFlight={this.bookFlight}
        />
      </div>
    );
  }
}

export default App;
