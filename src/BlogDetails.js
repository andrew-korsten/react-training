import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';

// K2. sfc + basic template (K3 is in App)
const BlogDetails = () => {

    // K4. Auto-import useParams. It enables us to interact with elements within the route path. Destructure "id" + output the id in the template and see that whenever I specify it in the url, it's shown there  too. (K5 is in BlogList)
    const { id } = useParams();

    // L1. Destructure the needed date from useFetch.
    // L2. Specify the first part of the url and then the "id". JS will coerce the second var to be included in the single string.
    // L3. Tie the data to the blog to be used locally here.
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    //N4. Invoke the history component
    const history = useHistory();





    // N2. Create the handleDelete funct
    const handleDelete = () => {
        // N3. Create the delete promise
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        })
        // N5. Create the then + history.push
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {/* L4. Create the template */}
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { blog && 
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    {/* N1. Create the delete button + place the onclick - handleDelete funct */}
                    <button onClick={handleDelete}>Delete the blog</button>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;