import React from 'react';
import NavMenu from './Nav';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Asphalt from './Asphalt';
import AsphaltOverlay from './AsphaltOverlay';
import Concrete from './Concrete';
import Contact from './Contact';
import DemolitionAndRepairs from './DemolitionAndRepairs';
import SealCoating from './SealCoating';
import SitePreparation from './SitePreparation';
import ParkingLots from './ParkingLots';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/asphalt" component={Asphalt} />
          <Route path="/asphalt-overlay" component={AsphaltOverlay} />
          <Route path="/concrete" component={Concrete} />
          <Route path="/contact" component={Contact} />
          <Route path="/demolition-and-repairs" component={DemolitionAndRepairs} />
          <Route path="/parking-lots" component={ParkingLots} />
          <Route path="/seal-coating" component={SealCoating} />
          <Route path="/site-preparation" component={SitePreparation} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
