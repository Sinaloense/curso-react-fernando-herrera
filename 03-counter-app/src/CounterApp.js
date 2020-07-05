import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        // setCounter((c) => c + 1);
        setCounter(counter + 1);
    }

    const handleReset = (e) => setCounter(value);

    const handleSubstract = (e) => setCounter(counter - 1);
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

CounterApp.prototype = {
    value: PropTypes.number,
}

export default CounterApp;