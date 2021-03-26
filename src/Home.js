
// K1. Create the BlogDetails Component (K2 is in BlogDetails)

// H1. Install the Router - second terminal, "npm install react-router-dom@5" + find out about the availability of newer stable versions + check in package.json that the dependency has been installed (H2 is in App)

// G1. Create useFetch file. The CH file/funct should always start with useAction.

// C1. Create the data folder, db.json file
// C2. Copy the data from gh
// C3. Open the second console and run "npx json-server --watch data/db.json --port 8000" (we need to specify the port 8000 since the dev process already runs on port 3000)
// C4. Check out the resource URL and make sure that the data is server correctly - https://i.imgur.com/EVY5xPk.png

import BlogList from "./BlogList";
import Test from "./Test";
import useFetch from "./useFetch";

const Home = () => {
    // G12. Incorporate the useFetch return vars + pass in the url
    // G13. Use the colon to specify "data:blogs", which means that in this component I use blogs as the data inside the useFetch funct. 
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    
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