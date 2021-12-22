import React,{Component} from 'react';
import './Style.css';
import {withRouter} from 'react-router'
import Switch from '@mui/material/Switch';
import HeaderMain from '../listing/HeaderMain';

const locationUrl = "https://apiforeveryone.herokuapp.com/location";
const restUrl = "https://apiforeveryone.herokuapp.com/restaurant?stateId=";

const myStyle = {
    display : "inline-block",
    marginRight : "3px"
}
const myStyle2 = {
    float : "right"
}

class Header extends Component{

    

    constructor(props){
        super()


        this.state={
            location:'',
            restaurant:''
        }
    }
    
    renderCity = (data) =>{
        if(data){
            //console.log(data)
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }


    renderRestaurants = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.restaurant_id}>{item.restaurant_name}| {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) =>{
        //console.log(event.target.value) gives value 1,2,3,4
        const stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then(res => res.json())
        .then((data) =>{
            this.setState({restaurant:data})
        })
    }

    handleRest =(event) =>{
        this.props.history.push(`/details/${event.target.value}`)
    }

    darkMode = () => {
        var mybody = document.body;
        mybody.classList.toggle("mydark")
    }

    render(){
        console.log(this.state.restaurant)
        return(
            <>
            <HeaderMain />
            <div class="background">
                <div class="container">
                    <div>
                        {/*<Switch onClick={this.darkMode}/><span className='darkmode_style'>Dark Mode</span>*/}
                        <div style={myStyle2}> 
                        {/*<button class="login">Log In</button>
                        <button class="signup">Sign Up</button>*/}
                        <Switch onClick={this.darkMode}/><span className='darkmode_style'>Dark Mode</span>
                        </div>
                    </div>
                </div>
                <div class="homelogo text-center">
                    <strong>e!</strong>
                </div>
                <header>Discover the best food & drinks in Delhi NCR </header>
                <div class="dropdown-block">
                    <div style={myStyle}>
                        <select class="home-dropdown" onChange={this.handleCity}>
                            <option>Select your City</option>
                            {this.renderCity(this.state.location)}
                        </select>
                    </div>
                    <div id="restaurant_searchbox"> 
                        <span class="glyphicon glyphicon-search search"></span>
                        <select class="input-box" onChange={this.handleRest}>
                            <option>Select any Restaurant</option>
                        {this.renderRestaurants(this.state.restaurant)}
                        </select>
                    </div>

                </div>
            </div>
            </>
        )
    }

    //api call 
    componentDidMount(){
        fetch(locationUrl,{method:'GET'})
        .then(res=> res.json())
        .then((data)=> this.setState({location:data}))
    }
}



export default withRouter(Header);
