// G1. Create useFetch file. The CH file/funct should always start with useAction.

// C1. Create the data folder, db.json file
// C2. Copy the data from gh
// C3. Open the second console and run "npx json-server --watch data/db.json --port 8000" (we need to specify the port 8000 since the dev process already runs on port 3000)
// C4. Check out the resource URL and make sure that the data is server correctly - https://i.imgur.com/EVY5xPk.png

import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Test from "./Test";

const Home = () => {
    // D3. Set the initial value of blogs to null
    const [blogs, setBlogs] = useState(null);

    // E1. Create the piece of state for "loading message"
    const [isPending,setIsPending] = useState(true);

    // F3. Create the state for the errors with "null" as the initial value
    const [error, setError] = useState(null);

    const [name, setName] = useState('mario');

    // D1. Create the useEffect Hook, 
    // D2. Make sure that the empty array is used as the dependency in order to avoid the continuous loop
    useEffect(() => {
            // E4. Create the setTimeOut to imitate the real server + 1000 lag
            setTimeout(() => {
                // D4. Fetch GET ALL from the endpoint
                fetch('http://localhost:8000/blogs')
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
                    setBlogs(data);
                    // E3. Change the status of the loading msg from true to false
                    setIsPending(false);
                    // F7. Specify the null for the setError in order to clear out any information on previously caught errors
                    setError(null);
                })
                // F1. Create the catch to catch any server-related errors
                .catch(err => {
                    // F6. Prevent the display for the "loading" msg
                    setIsPending(false);
                    // F4. Change the error by adding the information about the error to the state
                    setError(err.message);
                })
            }, 1000)
    }, [])
    

    
    return (
        <div className="home">
            {/* F5. Create the error display div */}
            { error && <div>{ error }</div>}
            {/* E2 Create the loading message */}
            {isPending && <div>Loading...</div>}
            {/* D8. Create the simplified terniary operator (&&) for the avaiablity of the blogs */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <Test />
        </div>
    );
}
 
export default Home