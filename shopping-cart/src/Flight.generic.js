import React from 'react';

export default class Flight extends React.Component {
    render() {
        const {flight, onClick, idx, buttonText} = this.props;

        return (
            <li>
                <span>{flight}</span>
                <button onClick={() => onClick(idx)}>{buttonText}</button>
            </li>
        )
    }
}