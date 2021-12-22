import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CuisineFilter from '../filters/CuisinesFilter';
import CostFilter from "../filters/CostFilter";
import HeaderMain from "./HeaderMain";

const url = "https://apiforeveryone.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component{
    constructor(props){
        super()

        this.state={
            restaurantList:''
        }
    }


    setDataAsPerFilter = (sortedData) => {
        this.setState({restaurantList:sortedData})
    }

    render(){
        return(
            <>
            <HeaderMain />
            <div className="container">
                    <div className="filters-section">
                        <CuisineFilter restPerCuisine={(data) => {this.setDataAsPerFilter(data)}}/>
                        <CostFilter restPerCost={(data) => {this.setDataAsPerFilter(data)}}/>
                    </div>
                <ListingDisplay listData={this.state.restaurantList}/>
            </div>
            </>
        )
    }

    //calling api 
    componentDidMount(){
        let mealId = this.props.match.params.mealId
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }



}

export default Listing