import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

import './memorize.css'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    return (
        <>
            <h1>useCallbackHook: { counter }</h1>

            <hr />

            <ShowIncrement increment={ increment } />
        </>
    );
}
