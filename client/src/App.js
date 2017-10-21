import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import SignUpPage from './components/pages/SignUpPage';
import SignInPage from './components/pages/SignInPage';
import Signout from './components/Auth/signout';
import RequireAuth from './components/Auth/require_auth';
import About from './components/pages/About';
import SavedJobs from './components/pages/SavedJobs';
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
          <Route exact path="/signup" render={history => <SignUpPage history={history.history} />} />
          <Route exact path="/signin" render={history => <SignInPage history={history.history} />} />
          <Route exact path="/signout" render={history => <Signout history={history.history} />} />
          <Route exact path="/saved-jobs" component={RequireAuth(SavedJobs)} />
          <Route exact path="/about-us" component={About} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
