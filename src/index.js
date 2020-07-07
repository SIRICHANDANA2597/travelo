import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/home';
import Product from './components/product/product'
import Contact from './components/tshirt/contact'
import P from './components/p/p'
import Pagination from './components/pagination/pagination'
import T from './components/t/t'
import Team from './components/team/team'
import Cart from './components/cart/cart'
import Review from './components/p/Review'
import Hotel from './components/Hotel/Hotel'
import Vplace from './components/Vplace/Vplace'
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Home} />
        </Route>
        <Route path="product" component={Product} />
        <Route path="contact" component={Contact} />
        <Route path="p" component={P} />
        <Route path="t" component={T} />
        <Route path="team" component={Team} />
        <Route path="cart" component={Cart} />
        <Route path="Review" component={Review} />
        <Route path="Hotel" component={Hotel} />
	<Route path="Vplace" component={Vplace} />
    </Router>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
