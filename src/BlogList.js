
const BlogList = ({ blogs, title }) => {
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
                </div>
            ))}    
            
            {/*B1. Wrap the function with the AF and pass in the argument */}
            <button className="change-name" onClick={() => handleChange('yoshi')}>Change the name</button>        
        </div>
    );
}
 
export default BlogList;