import { Link } from "react-router-dom";

// A7. Pass in the handleDelete prop
const BlogList = ({ blogs, title, handleDelete }) => {


    // B2. specify the name as the param
    const handleChange = (name) => {
        // B3 concat the name
        console.log('Change' + name);
    }

    return (
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    {/* K5. AI the Link and wrap the preview into it. the path is literal string + blog.id passed into with ${} + check on Home that the user is routed to the correctly nubmered url */}
                    <Link to={`blogs/${blog.id}`}> 
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}    
            
            {/*B1. Wrap the function with the AF and pass in the argument */}
            <button className="change-name" onClick={() => handleChange('yoshi')}>Change the name</button>        
        </div>
    );
}
 
export default BlogList;