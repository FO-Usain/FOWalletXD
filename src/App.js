import Nav from "./reusables/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import reusables
import Footer from "./reusables/Footer";

//import the pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
