import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Listing from './listing/ListingApi'
import Home from './Home/Home'
import RestDetails from './details/RestDetails'
import PlaceOrder from "./booking/placeOrder";
import ViewOrder from "./booking/ViewOrderApi"
import Login from "./listing/loginLogout/Login";
import Register from "./listing/loginLogout/Register";


const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:mealId" component={Listing}/>
            <Route path="/details/:restId" component={RestDetails}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/vieworder" component={ViewOrder}/>
            <Route path="/login" component={Login}/>
            <Route path="/register_new_user" component={Register}/>
        </BrowserRouter>

    )
}


export default Routing