import Navbar from './Navbar';
import Home from './Home';

function App() {
  const likes = 50;
  const link = 'htttp://www.google.com';
  const divClass = "system";
  const buttonClass = "new-button";


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
