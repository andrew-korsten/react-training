// G5. Import the useState and useEffect from react
import { useState, useEffect } from 'react'

// G2. Create the funct useEffect - standard model
// G9. Pass in the URL as the param for the useFetch funct - stitching it into a reusable CH for any resource
const useFetch = (url) => {
    // G4. Migrate the 3 state pieces from Home to useFetch 
    // D3. Set the initial value of blogs to null
    // G7. Change the "blogs" to "data" and "setBlogs" to "setData" because this is a reusable CH and not the special H for blogs.
    // G8. CTRL+F for blogs in this file and replace with "data"
    const [data, setData] = useState(null);

    // E1. Create the piece of state for "loading message"
    const [isPending,setIsPending] = useState(true);

    // F3. Create the state for the errors with "null" as the initial value
    const [error, setError] = useState(null);



    // G3. Copy and paste the overall useEffect funct
     // D1. Create the useEffect Hook, 
    // D2. Make sure that the empty array is used as the dependency in order to avoid the continuous loop
    useEffect(() => {
        // J2. Create the new aborcontroller
        const abortCont = new AbortController();

        // E4. Create the setTimeOut to imitate the real server + 1000 lag
        setTimeout(() => {
            // D4. Fetch GET ALL from the endpoint
            // G10. Replace the hard-coded URL with the url var
            // J3. Connect the AbortController to the fetch 
            fetch(url, {signal: abortCont.signal })
            // D5. Get the res via the then + pass the json into the js object, and return it
            .then(res => {
                // F2. Create the validator to check for any resource-related errors
                if(!res.ok){
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            // D6. Then the data 
            .then(data => {
                // D7. update the blogs with data
                setData(data);
                // E3. Change the status of the loading msg from true to false
                setIsPending(false);
                // F7. Specify the null for the setError in order to clear out any information on previously caught errors
                setError(null);
            })
            // F1. Create the catch to catch any server-related errors
            .catch(err => {
                // J5. Create the if-else to check to the abort error, and we need to preven the below actions in that case because whenever the below actions are performed, we are updating the state inside the home and thus we are still updating the content. We need to specify "AbortError".
                if(err.name === 'AbortError') {
                    console.log('fetch aborted because of the abort error');
                }   else {
                    // F6. Prevent the display for the "loading" msg
                setIsPending(false);
                    // F4. Change the error by adding the information about the error to the state
                setError(err.message);
                } 
            })
        }, 1000)

        // J1. Create the cleanup function so that we now when the function has run, i.e. when the unwanted loading has not been interrupted. + cl "cleanup"
        // J4. Replace the cl with the actual abort activation to abort the fetch at this point.
        return () => abortCont.abort();

    // G11. Specify the url inside the dependencies for the system to track to the url changes (G22 is in Home)
    }, [url])

    // G9. Return the 3 names of the states
    return { data, isPending, error }
} 

// G6. Export the useFetch 
export default useFetch