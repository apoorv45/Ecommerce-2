import React, { useEffect } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Signin from './container/signin';
import Signup from './container/signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getAllCategory, getinitialData } from './actions';
import Products from './container/Products';
import Orders from './container/Orders';
import Category from './container/category';


function App() {


  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    dispatch(getinitialData());
}, []);


  return (
    <div className="App">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/category" component={Category} />
          <PrivateRoute path="/products"  component={Products} />
          <PrivateRoute path="/orders"  component={Orders} />



          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
    </div>
  );
}

export default App;
