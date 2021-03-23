// A5 Pass in the handleDelete function as a prop (A6 in Home)
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
                    {/* A1. Create the button for the deletion */}
                    {/* A2. Create the two-layer AF because we will need to pass in the data into it without it being called here + pass in the blog.id from the map function run on the current blog (A3 is in Home)*/}
                    <button className="delete-blog" onClick={() => handleDelete(blog.id)}>Delete the blog</button>
                </div>
            ))}    
            
            {/*B1. Wrap the function with the AF and pass in the argument */}
            <button className="change-name" onClick={() => handleChange('yoshi')}>Change the name</button>        
        </div>
    );
}
 
export default BlogList;