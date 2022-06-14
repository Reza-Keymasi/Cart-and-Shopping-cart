import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Store from "./components/Store";
import ProductDetails from './components/shared/ProductDetails';

// Context
import ProductContextProvider from './context/ProductContextProvider'


const App = () => {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products"/>
      </Switch>
    </ProductContextProvider>
  );
};

export default App;