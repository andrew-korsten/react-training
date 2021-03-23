import { useState } from "react";
import BlogList from "./BlogList";
import Test from "./Test";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    /* A2. Create the handleDelete funct here because we want to work with the State directly, as opposed to working with its prop in BlogList */
    // A3. Pass in the "id" as this funct will be used in BlogList where the arg will be "blog.id"
    const handleDelete = (id) => {
        // A4. Filter out any deleted blogs by anti-matching them
        const newBlogs = blogs.filter((blog) => blog.id != id);
        // A5. replace the old data with the new data in the blogs
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            {/* A6. Pass the props for the handleDelete funct */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <Test />
        </div>
    );
}
 
export default Home