import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route, Switch} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'


export class Section extends Component {
    render() {
        return (
            <section>
                <Switch>
                    <Route path="/" component={Products} />
                    <Route path="/shopping-cart-react/product" component={Products}  />
                    <Route path="/shopping-cart-react/product/:id" component={Details} />
                    <Route path="/shopping-cart-react/cart" component={Cart} />
                    <Route path="/shopping-cart-react/payment" component={Payment} />
                </Switch>
            </section>
        )
    }
}

export default Section
