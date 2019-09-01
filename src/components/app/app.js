import React from 'react';
import './app.css';
import {HomePage, CartPage} from '../pages';
import ShopHeader from "../shop-header/shop-header";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";



const App = ({numItems, total}) => {
    return (
        <main className="container">
            <ShopHeader numItems={numItems} total={total}/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/cart" component={CartPage} />
            </Switch>
        </main>
    )
};

const mapStateToProps = (state) => {
  return {
      numItems: state.shoppingCartList.cartItems.length,
      total: state.shoppingCartList.total
  }
};

export default connect(mapStateToProps)(App);