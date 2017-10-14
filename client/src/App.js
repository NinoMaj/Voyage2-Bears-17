import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Signup from './components/Auth/signup';
import Signin from './components/Auth/signin';
import Signout from './components/Auth/signout';
import About from './components/pages/About';
import ExploreJobs from './components/pages/ExploreJobs';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" render={history => <Signup history={history.history} />} />
          <Route exact path="/signin" render={history => <Signin history={history.history} />} />
          <Route exact path="/signout" render={history => <Signout history={history.history} />} />
          <Route exact path="/explore-jobs" component={ExploreJobs} />
          <Route exact path="/about-us" component={About} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
