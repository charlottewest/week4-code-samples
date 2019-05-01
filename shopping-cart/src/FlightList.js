import React from 'react';
import Flight from './Flight.generic';

export default class FlightList extends React.Component {
    render() {
        const flightList = this.props.flights
            .map((flight, idx) => {
                return (
                    // <li key={idx}>
                    //     <span>{flight}</span>
                    //     <button onClick={() => this.props.onBookFlight(idx)}>Book</button>
                    // </li>
                    <Flight
                        flight={flight}
                        onClick={this.props.onBookFlight}
                        idx={idx}
                        key={idx}
                        buttonText="Book"
                    />
                );
            });

        return (
            <div>
                <ul>
                    {flightList}
                </ul>
            </div>
        );
    }
}