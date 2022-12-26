import { useState, useEffect } from "react";

function useRequestApi (fn) {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // fn for handling request and response from API
    async function request (...args) {
        setLoading(true);
            
        try {
            const response = await fn(...args);
            setData(response.data);
        } catch (err) {
            setError(err.message || "Unexpected Error!")
        } finally {
            setLoading(false);
        }
    }

    // start request
    useEffect(() => {
        request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
        error,
        loading
    };
};

export default useRequestApi;








