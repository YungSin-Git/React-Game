import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import { Button } from 'react-bootstrap';
import Form from './Form';

const routing = (  
  <Router>  
  <div className="menu">  
    <div className="header">
    <a href="#"><img src="img/gmail.png" /></a>
    <a href="#"><img src="img/twitter.png" /></a>
    <a href="#"><img src="img/instagram.png" /></a>
    <a href="#"><img src="img/facebook.png" /></a>
    </div>        
    <p className="header-p"><b>Call Us: +855975268567</b></p>
    <div className="index">
        <ul>  
          <li>
          <h2>Gaming Website</h2>  
          </li>
          <li></li>
          <li>  
                <NavLink to="/Home" exact activeStyle={  
                  {color:'black'}  
                  }>Home</NavLink>  
            </li>  
            <li>  
                <NavLink to="/Form" exact activeStyle={  
                  {color:'black'}  
                  }>Register</NavLink>  
            </li>
            <li>  
                <input placeholder="Search" type="text" className="mr-sm-2" /> 
                <Button variant="dark">Search</Button>
            </li>
        </ul>
      </div>  
        <Route exact path="/" component={App} />  
        <Route path="/Home" component={Home} />  
        <Route path="/Form" component={Form} />
  </div>  
  <Footer />
  </Router>  
)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  routing,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
