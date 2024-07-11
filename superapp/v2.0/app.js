import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Payment from './components/Payment/Payment';
import Restaurants from './components/FoodDelivery/Restaurants';
import Order from './components/FoodDelivery/Order';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/payment" component={Payment} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/order" component={Order} />
      </Switch>
    </Router>
  );
};

export default App;
