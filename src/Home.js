// C1. Create the data folder, db.json file
// C2. Copy the data from gh
// C3. Open the second console and run "npx json-server --watch data/db.json --port 8000" (we need to specify the port 8000 since the dev process already runs on port 3000)
// C4. Check out the resource URL and make sure that the data is server correctly - https://i.imgur.com/EVY5xPk.png

import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Test from "./Test";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario');

    /* A2. Create the handleDelete funct here because we want to work with the State directly, as opposed to working with its prop in BlogList */
    // A3. Pass in the "id" as this funct will be used in BlogList where the arg will be "blog.id"
    const handleDelete = (id) => {
        // A4. Filter out any deleted blogs by anti-matching them
        const newBlogs = blogs.filter((blog) => blog.id != id);
        // A5. replace the old data with the new data in the blogs
        setBlogs(newBlogs);
    }

    const handleName = (name) => {
        setName('luigi');
    }

    useEffect(() => {
        console.log('useEffect ran');
        console.log(blogs);
    }, [blogs, name])

    return (
        <div className="home">
            {/* A6. Pass the props for the handleDelete funct */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {blogs.filter((blog) => blog.author === 'mario').map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h3>{ blog.title }</h3>
                    <h3>{ blog.author }</h3>
                    <h3>{ blog.body }</h3>
                </div>
            ))}
            <Test />
        </div>
    );
}
 
export default Home