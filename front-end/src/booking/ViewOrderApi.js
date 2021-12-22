import React, { Component } from 'react'
import ViewDisplay from './ViewOrderDisplay'
import axios from 'axios'


const url = "https://apiforeveryone.herokuapp.com/viewOrder"

class ViewOrderApi extends Component {
    constructor(){
        super()

        this.state={
            orders:''
        }
    }
    render() {
        return (
            <>
            <h3>All orders list -</h3>
            <ViewDisplay orderData={this.state.orders}/>
            </>
        )
    }

    //api call

    componentDidMount(){
        axios.get(url).then((res)=>{this.setState({orders:res.data})})
    }
}

export default ViewOrderApi;
