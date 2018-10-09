import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { IndexRoute } from 'react-router';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import NewApp from './components/application';
import NewInput from './components/pages/new_input';
import Login from './components/auth/login';
import About from './components/pages/about';
import Header from './components/header';
import editAbout from './components/editing/editAbout';
import Logout from './components/auth/logout';
import Participate from './components/pages/participate';
import Results from './components/pages/results';
import Field from './components/pages/field';
import Maps from './components/pages/maps';
import editParticipate from './components/editing/editParticipate';
import editResults from './components/editing/editResults';
import postDetails from './components/pages/detailed';
import DataList from './components/pages/data_list';


import reducers from './reducers';

const store = createStore(reducers, {
  auth: {authenticated: localStorage.getItem('token')}
}, applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
      <NewApp>
        <Switch>
  			  <Route exact path="/" component={About} />
   			  <Route path="/newinput" component={NewInput} />
   			  <Route path="/data/:id" component={postDetails} />
          <Route path="/login" component={Login} />
          <Route path="/datalist" component={DataList} />
          <Route path="/editabout" component={editAbout} />
          <Route path="/logout" component={Logout} />
          <Route path="/participate" component={Participate} />
          <Route path="/about" component={About} />
          <Route path="/results" component={Results} />
          <Route path="/field" component={Field} />
          <Route path="/maps" component={Maps} />
          <Route path="/editparticipate" component={editParticipate} />
          <Route path="/editresults" component={editResults} />
        </Switch>
      </NewApp>
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
