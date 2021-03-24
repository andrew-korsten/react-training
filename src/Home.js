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

    const [name, setName] = useState('mario');

    // D1. Create the useEffect Hook, 
    // D2. Make sure that the empty array is used as the dependency in order to avoid the continuous loop
    useEffect(() => {
               // D4. Fetch GET ALL from the endpoint
               fetch('http://localhost:8000/blogs')
               // D5. Get the res via the then + pass the json into the js object, and return it
               .then(res => {
                   return res.json();
               })
               // D6. Then the data 
               .then(data => {
                   // D7. update the blogs with data
                   setBlogs(data);
               }) 
    }, [])
    

    
    return (
        <div className="home">
            {/* D8. Create the simplified terniary operator (&&) for the avaiablity of the blogs */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <Test />
        </div>
    );
}
 
export default Home