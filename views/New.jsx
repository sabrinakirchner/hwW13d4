import React from 'react';

const New = () => {
return(
    <div>
        <h1>Create New Flight</h1>
        <form action='/flights' method='POST'>
        <label htmlFor='airline'>Airline:</label>
        <select name='airline' required>
            <option value='Southwest'> Southwest </option>
            <option value='United'>United </option>
        </select><br/>

        <label htmlFor='flightNo'> Flight No.:</label>
        <input type='number' name='flightNo' min='10' max='9999' required />

        <label htmlFor='departs'>Departure Date and time:</label>
        <input type='determine-local' name='departs' required /><br /> 

        <label htmlFor='airport'>Airport: </label>
        <select name='airport' required>
            <option value='AUS'>AUS</option>
            <option value='DAL'>DAL</option>
            <option value='LAX'>LAX</option>
            <option value='SAN'>SAN</option>
            <option value='SEA'>SEA</option>
        </select><br/>

        <label>Destinations: </label>
        <div> 
            <label>Destination Airport: </label>
            <select name='destinationAirport' required>
                <options value='AUS'>AUS</options>
                <option value='DAL'>DAL</option>
                <option value='LAX'>LAX</option>
                <option value='SAN'>SAN</option>
                <option value='SEA'>SEA</option>
            </select> <br />

            <label>Arrival Date and Time: </label>
            <input type='datetime-local' name='arrivalDateTime' require /><br />
        </div>
        <button type='button' id='addDestination'>Add Destination </button>
        <button type='submit'> Create Flight</button>
        </form>
    </div>
);
};

export default New; 