import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const randomRoom = Math.floor(Math.random() * 1000000000);

ReactDOM.render(
<Router>
  <Switch>
    <Route exact path="/" render={() => (
        <Redirect to={`/${randomRoom}`}/> 
    )}/>
    <Route exact path="/:id" component={App}/>
    {/* <Route component={NoMatch}/> */}
  </Switch>
</Router>, document.getElementById('root'));

registerServiceWorker();
