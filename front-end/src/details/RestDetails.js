import React,{Component} from 'react'
import './restDetails.css'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './MenuDisplay';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HeaderMain from "../listing/HeaderMain";
import Slider from "./Slider";
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import ReactPlayer from 'react-player';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';


const url = "https://apiforeveryone.herokuapp.com/details/";
const menuUrl = "https://apiforeveryone.herokuapp.com/menu/"

class RestDetails extends Component{
    constructor(){
        super()


        this.state={
            details:'',
            menuList:'',
            userItem:'',
            cart:'empty cart'
        }
    }

    addToCart =(data) =>{
        //console.log("data in cart",data)
        this.setState({userItem:data})
        //sessionStorage.setItem('menu',orderId)
        //sessionStorage.setItem('restaurant',this.props.restId)
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem);
        //sessionStorage.setItem('restaurant',this.props.match.params.restId) dont need it now
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)

    }


    render(){
        console.log("details>>>>>",this.state.details)
        let details = this.state.details
        return(
            <>
            <HeaderMain />
            <div data-aos="zoom-in" className="rest_details">
                <div id="rest_image">
                    <img src={details.restaurant_thumb}/>
                </div>
                <div id="rest_content">
                        <h2>{details.restaurant_name}</h2>
                        <h4>{details.address}</h4>
                        <h4>Quality : {details.rating_text}</h4>
                        <Chip label="fast food" />
                        <Chip label="street food" variant="outlined" />
                        <Chip label="Breakfast" />
                        <Chip label="Dinner" variant="outlined" />
                </div>
            </div>
                    {/*<div className="container-fluid">
                        <div id="rest_details_div">
                            <div className="left-restdetails">
                                <img src={details.restaurant_thumb} />
                            </div>
                            <div className="right-restdetails">
                            <h2>{details.restaurant_name}</h2>
                            <h3>{details.address}</h3>
                            <h4>{details.rating_text}</h4>
                            <h4>{details.average_rating}<Rating name="size-medium" defaultValue={4} /></h4>
                            <Chip label="fast food" />
                            <Chip label="street food" variant="outlined" />
                        </div>
        </div>*/}
                <div className="container menu_container">
                <h3>Variety of Cuisines & mealtypes</h3>
                <Slider />
                    <Tabs>
                        <TabList>
                        <Tab>Menu</Tab>
                        <Tab>Contact</Tab>
                        <Tab>Details</Tab>
                        </TabList>

                        <TabPanel>
                        <h2 style={{color:'green',fontSize:20}}>Menu </h2>
                        <MenuDisplay menudata={this.state.menuList} restId={this.props.match.params.restId} finalOrder={(data)=>{this.addToCart(data)}}/>
                        </TabPanel>
                        <TabPanel>
                        <h5 style={{color:"red"}}><CallIcon style={{height:30,width:30}}/> +911400362122</h5>
                        <h5><HomeIcon style={{height:30,width:30,margintop:10}}/>{details.address}</h5>
                        </TabPanel>
                        <TabPanel>
                        <h4>Average Rating : {details.rating_text}</h4>
                        <FeaturedVideoIcon /> <span>featured video</span>
                        <ReactPlayer url='https://youtu.be/_U8DcQK8eVI' controls width="100%" />
                        </TabPanel>
                    </Tabs>
                </div>
                <div style={{marginTop:"30px"}}>
                <center>
                <Button style={{marginRight:10}}variant="contained" size="large" color="primary" onClick={this.proceed}>Proceed</Button>
                <Link to="/"><Button variant="contained" size="large" color="primary">Back</Button></Link>
                </center>
                </div>
                {/*<div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3>{details.restaurant_name}</h3>
                    </div>
                    <div className="panel-body">
                        <img src={details.restaurant_thumb} />
                    </div>
                    <hr/>
                    <button className="btn btn-success">see Image Gallery</button>
                    <h2>{details.restaurant_name} &#9819;</h2>
                    <h4>{details.rating_text}</h4>
                    <h4>{details.average_rating}</h4>
                    <Tabs>
                        <TabList>
                        <Tab>Menu</Tab>
                        <Tab>Contact</Tab>
                        <Tab>Details</Tab>
                        </TabList>

                        <TabPanel>
                        <h2 style={{color:'green',fontSize:20}}>Menu </h2>
                        <MenuDisplay menudata={this.state.menuList} restId={this.props.match.params.restId} finalOrder={(data)=>{this.addToCart(data)}}/>
                        </TabPanel>
                        <TabPanel>
                        <h2>{details.address}</h2>
                        <h3>hello</h3>
                        </TabPanel>
                        <TabPanel>
                        <h2>Details heere</h2>
                        <h2>{details.rating_text}</h2>
                        </TabPanel>
                    </Tabs>
                    <button className="btn btn-success" onClick={this.proceed}>Proceed order</button>
                    <ShoppingCartIcon style={{height:60,width:60}}/><span>{this.state.cart}</span>
        </div>*/}
            </>
        )
    }

    //api call 
    async componentDidMount(){
        let restId= this.props.match.params.restId;
        let response = await axios.get(`${url}${restId}`)
        let menudata = await axios.get(`${menuUrl}${restId}`)
        console.log(response.data)
        console.log(menudata.data)
        this.setState({details:response.data[0],menuList:menudata.data})
    }
}


export default RestDetails