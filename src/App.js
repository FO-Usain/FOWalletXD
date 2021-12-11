import Nav from "./reusables/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import reusables
import Footer from "./reusables/Footer";

//import the pages
import Home from "./pages/Home";
import Assets from "./pages/Assets";
import Staking from "./pages/Staking";
import Earn from "./pages/Earn";
import NTFs from "./pages/NTFs";
import DAppBrowser from "./pages/DAppBrowser";
import Login from "./pages/Login";
import Legal from "./pages/Legal";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/assets">
            <Assets />
          </Route>
          <Route exact path="/staking">
            <Staking />
          </Route>
          <Route exact path="/earn">
            <Earn />
          </Route>
          <Route exact path="/ntfs">
            <NTFs />
          </Route>
          <Route exact path="/dappbrowser">
            <DAppBrowser />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login/legal">
            <Legal />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
