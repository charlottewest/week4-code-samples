import React from 'react';

class ShoppingCart extends React.Component {
    render() {
        const flightList = this.props.flights
            .map((flight, idx) => {
                return (
                    <li key={idx}>
                        <span>{flight}</span>
                        <button onClick={() => this.props.onDeleteFlight(idx)}>Delete</button>
                    </li>
                );
            });

        return (
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {flightList}
                </ul>
            </div>
        );
    }
}

export default ShoppingCart;