import Navbar from './Navbar';
import Home from './Home';
// H2. When we import "BrowserRouter as Router", this means that we can use the word "Router inside the file"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    // H3. Wrap the whole app with Router component
    <Router>
      <div className="App">
        {/* H7. Note that Navbar is outside of the Router, and it's shown at each page */}
        {/* H8. Test by using "/" in the browser */}
        <Navbar />
        <div className="content">
          {/* H4. Place the Switch component inside the "content" div because this is where we want to have the cntent of our pages */}
          <Switch>
            {/* H5. Create the Route + specify the path */}
            {/* I2. Understand that I need to specify the keyword "exact" after the Route in order to make sure that the "/" is served only when "/" is specified. Otherwise, it will do the fuzzy match and not the exact mactch, i.e. "/created" will serve the home pages because it contains "/" (I3 is in Navbar) */}
            <Route exact path="/">
              {/* H6. Nest the component inside the Route */}
              <Home />
            </Route>
            {/* I1. Create the second Route + create the component file */}
            <Route path="/create">
              <Create />
            </Route>
            {/* K3. Create the route with the dynamic param, denoted by ":" + test the work with various ids*/}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
