import { useEffect, useState } from "react";


/**
 * fetches strictly json files from server with the passed URL
 * @param {} url the URL
 * @returns 
 */
const useFetchJson = (url = "") => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        fetch(url).then(response => {
            if (!response.ok) {
                console.log("bad");
                setIsLoading(false);
                throw Error(response.status);
            }

            
            return response.json();
        }).then(body => {
            console.log("here we are");

            setData(body)
        }).catch(error => {
            setError(error.message);
        })
    }, []);

    return {isLoading, error, data};
}

export {useFetchJson};