import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import * as ShopActions from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "../shop/Shop";
import  * as CartActions from "../data/CartActionCreators";
import { CartDetails } from "../shop/CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "../shop/Checkout";
import { Idioms } from "../shop/Idioms";
import { EnIdioms } from "../shop/EnIdioms";
import { Home}   from "../shop/Home";
import { Thanks}   from "../shop/Thanks";
import {IdiomsDataGetter} from "../data/IdiomsDataGetter"
import {EnIdiomsDataGetter} from "../data/EnIdiomsDataGetter"
const mapDispatchToProps = { ...ShopActions, ...CartActions};

export const ShopConnector = connect(ds => ds, mapDispatchToProps)(
    class extends Component {

        selectComponent = (routeProps) => {
            const wrap = (Component, Content) =>
                <Component { ...this.props}  { ...routeProps}>
                    { Content && wrap(Content)}
                </Component>
            switch (routeProps.match.params.section) {
                case "home":
                    return wrap(Home);
                    case "thanks":
                        return wrap(Thanks);
                case "enidioms":
                    return wrap(EnIdiomsDataGetter,EnIdioms);
                case "idioms":
                    return wrap(IdiomsDataGetter,Idioms);
                default:
                    return <Redirect to="/learn/home" />
            }
        }

        render() {
            return <Switch>
                <Route path={ "/learn/:section?/:category?/:page?"}
                    render = { routeProps => this.selectComponent(routeProps) } />
            </Switch>
        }

        componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);
    }
)
