// A7. Pass in the handleDelete prop
const BlogList = ({ blogs, title, handleDelete }) => {
    // const blogs = props.blogs;
    // const title = props.title;


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
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    {/* A1 Create the button, create the onClick event with the two-level AF because we need to pass in an argument - blog.id (A2 is in Home) */}
                    <button className="deleteBlog" onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}    
            
            {/*B1. Wrap the function with the AF and pass in the argument */}
            <button className="change-name" onClick={() => handleChange('yoshi')}>Change the name</button>        
        </div>
    );
}
 
export default BlogList;