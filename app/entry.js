import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import PrivateRoute from './components/Routes/PrivateRoute';
import AdminRoute from './components/Routes/AdminRoute';

// Featured
import Index from './views/Index';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';

import Blog from './views/Blog';
import First from './views/posts/first';
import Primes from './views/posts/primes';
import Comments from './views/posts/comments';

// Hidden
import Music from './views/Music';

import Login from './views/Login';
import Admin from './views/Admin';

import NotFound from './views/NotFound';

// All of our CSS
require('../public/css/main.scss');

if (window.location.href.endsWith('#')) { // For Google Oauth
  window.history.replaceState({}, '', window.location.href.slice(0, -1));
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/resume" exact component={Resume} />
      <Route path="/stats" exact component={Stats} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/music" exact component={Music} />
      <Route path="/login" exact component={Login} />

      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/first" exact component={First} />
      <Route path="/blog/primes" exact component={Primes} />
      <Route path="/blog/comments" exact component={Comments} />

      <PrivateRoute path="/resume" component={Resume} />
      <AdminRoute path="/admin" component={Admin} />

      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
