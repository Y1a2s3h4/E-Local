import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Sellers from "./components/Sellers/Sellers";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={ProductDetails} />
        <Route path="/sellers" component={Sellers} />
      </Router>
    </Provider>
  );
}

export default App;
