import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if(!isMounted.current)
                        return;
                    
                    setState({
                        loading:    false,
                        error:      null,
                        data:       data,
                    });
                }, 2000);
            });
    }, [url]);

    return state;
}