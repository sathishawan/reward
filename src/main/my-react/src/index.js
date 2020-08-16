import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Greater from "./components/Greater";
import Lesser from "./components/Lesser";
import Between from "./components/Between";
import Employee from "./components/Employee";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Edit from "./components/Edit";
// import Update from "./components/Update";



ReactDOM.render(
<Router>
<div>
<Route exact path='/' component={App} />
<Route path='/Greater' component={Greater} />
<Route path='/Lesser' component={Lesser} />
<Route path='/Between' component={Between} />
<Route path='/Edit/:_id' component={Edit} />


{/* <Route path='/Edit/:_id'
render={props=>(
<Edit {...props}/>
)}
></Route> */}

<Route path='/Employee' component={Employee} />







</div>
</Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();