import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    // M2. Track the data in the "blog title" field (a. track via the state, b. display the value at the page bottom)
    // M2.1. Create the state + specify the empty string as the starting value
    const [title, setTitle] = useState('');

    // M3. Redo the M2 on body
    const [body, setBody] = useState('');

    // M4. Redo M2 on author
    // M4.1. We have to choose one of the two available options in the select
    const [author, setAuthor] = useState('mario');

    // M6. Create the loading message
    // M6.1 Create the state
    const [isPending, setIsPending] = useState(false);

    // M7. Create the progrmmatic redirect
    // M7.1 Invoke the useHistory component + auto-import it
    const history = useHistory();




    // M5.2. Create the fuct + pass in the e as the arg
    const handleSubmit = (e) => {
        // M5.2.1 Prevent default 
        e.preventDefault();

        //M5.2.2. Create the blog obj
        const blog = { title, body, author };

        //M6.2. Specify the "true" for the isPending state
        setIsPending(true);

        //M5.3. Process POST req
        //M5.3.1 Create the standard POST fetch
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        // M5.3.2. CL the confirmation
        .then(() => {
            console.log('New blog added');

            //6.3. Change the isPending state back to "false"
            setIsPending(false);
            // M7.2 Practice the method to go back one page after adding the blog - history.go(-1) - in the then.
            //M7.3 Push the user to the home page after the adding
            history.push("/");
        })


    }
    

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            {/* M5. Create the submit tracker */}
            {/* M5.1. Create the submit tracker on Form + refer to the funct */}
            {/* M1. Create the form - delete the action because we will track the submit later */}
            <form onSubmit={handleSubmit}>
                {/* M1.1. Create the input */}
                {/* M1.1.1 Creat the label + no attr */}
                <label>Blog title:</label>
                {/* M1.1.2 Create the input + format it so that each new attr is at the new line for the convenience, https://i.imgur.com/74qqNQg.png. Specify "required attr" */}
                <input 
                    type="text"
                    required
                    // M2.2. Associate the field value with the state
                    value={ title }
                    // M2.3. Enable the changeability of the state by pushing the e.target.value into it.
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* M1.2. Create the body field */}
                <label>Blog body:</label>
                {/* M1.2.1 Clean the textarea and format it in the same way. Required. */}
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                {/* M1.3. Create the select */}
                <label>Blog author:</label>
                {/* M4.2 Redo the functionality */}
                <select
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}                    
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>                    
                </select>

                {/* M6.4 Create the two options for the loading message. Disable the second option because I want to retain the styles and I don't want to create a div instead of the button here. (M1.4. Add blog button was to create the Button at M1.4 and then it was tucked into M6.4...) */}
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}



                {/* M2.4 Output the title */}
                <p>{ title }</p>
                <p>{ body }</p>
                {/* M4.3 Output the author */}                
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default Create;