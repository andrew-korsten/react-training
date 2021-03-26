// I3. Import the Link Component
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* I4. replace the "a" with "Link" and "href" with "to" */}
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;