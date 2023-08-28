const React = require('react')

const Show =({ flight }) => {
    return(
        <div> 
            <h1> Flight Details </h1>
            <p>Airline: {flight.airline}</p>
            <p>Flight No.:{ flight.flightNo}</p>
            <p>Departure: {new Date(flight.departs).toLocaleString()}</p>
            <p>Airport: {flight.airport}</p>

            <h2>Destinations</h2>
            <ul>
                {flight.destinations.map((destination, index)=> 
                <li key={index}>
                    <p>Airport: {destination.airport}</p>
                    <p>Arrival:{new Date(destination.arrival).toLocaleString()}</p>
                </li>
                )}
            </ul>
        </div>
    );
};

module.exports = Show; 