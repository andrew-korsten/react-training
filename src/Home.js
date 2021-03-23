import { useState } from "react";
import BlogList from "./BlogList";
import Test from "./Test";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

  // A3. Create the handleDelete function here because this is where data is and we should always create the handling functions in the file where the data is, and then we should pass through the props to the consuming components.
    const handleDelete = (id) => {
        // A6. filter out the deleted blog, i.e. retain all the blogs whose id doesn't match tha passed-in id
        const newBlogs = blogs.filter((blog) => blog.id != id);
        // A7. Update the state with newBlogs
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            {/* A4. Specify the function as the pro (A5 in BlogList)*/}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <Test />
        </div>
    );
}
 
export default Home