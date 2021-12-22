import React, { Component } from 'react'
import './placeOrder.css'
import Button from '@mui/material/Button';
import PaidIcon from '@mui/icons-material/Paid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import HeaderMain from "../listing/HeaderMain";
import { Link } from 'react-router-dom';
import Banner from './Banner'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const url = "https://apiforeveryone.herokuapp.com/menuItem";
const PostUrl = "https://apiforeveryone.herokuapp.com/placeOrder"


export default class PlaceOrder extends Component {

    constructor(props){
        super(props)


        this.state={
            details:'',
            amount:Number(0),
            hotel_name:this.props.match.params.restName,
            name:'',
            phone:'',
            email:'',
            address:'',
            status:'Pending',
            id:Math.floor(Math.random()*100000),
            cost:''
        }
    }


    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        //console.log(this.state)
        fetch(PostUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(console.log("payment gateway"))
        {/*.then(this.props.history.push('/viewOrder'))*/}
    }

    renderItems = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <>
                        {/*<div className="container item_box">
                            <img src={item.menu_image} className="item_image"/>
                            <h2 className="item_name">{item.menu_name}</h2>
                            <h3 className="item_name">Rs : {item.menu_price}</h3>
                            <p className="item_name">{item.description}</p>
                </div>*/}
                        {/*card material ui here*/}
                        <div className="item_box"> 
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="image_restaurant"
                                    height="150"
                                    image={item.menu_image}
                                />
                                <CardContent style={{height:100,width:300}}>
                                    <Typography gutterBottom variant="h3" component="div" style={{color:'rgb(26, 35, 114)'}}>
                                    {item.menu_name}
                                    </Typography>
                                    <Typography variant="h4" style={{color:"green",fontWeight:"bold",fontSize:20}}>
                                    <CurrencyRupeeIcon style={{height:15,width:15}}/>{item.menu_price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="large">20%off</Button>
                                    <Button size="large">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>

                    </>
                )
            })
        }
        else{
            return(
                <>
                <center>
                    <h5>please wait..</h5>
                    <img src="../loading2.gif" style={{height:150,width:150}}/>
                </center>
                </>
            )
        }
    }

    render() {
        return (
            <>
            <HeaderMain/>
            <div>
            <center><h3>Order from <span style={{color:"crimson"}}>{this.props.match.params.restName}</span> is below</h3></center>
            <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                <div class="row form-div">
                    <div class="col-md-12">
                        <div class="form-group col-md-6">
                            <label>Id</label>
                            <input type="number" class="form-control control-mb" name="id" value={this.state.id} onChange={this.handleChange} readonly="true"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Name</label>
                            <input class="form-control control-mb" name="name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>E-mail</label>
                            <input class="form-control control-mb" name="email" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Phone no</label>
                            <input class="form-control control-mb" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Address</label>
                            <input class="form-control control-mb" name="address" value={this.state.address} onChange={this.handleChange} required/>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="hidden" class="form-control control-mb" name="cost" value={this.state.amount} />
                        </div>
                        <div class="form-group col-md-6">
                            <input type="hidden" class="form-control control-mb" name="hotel_name" value={this.state.hotel_name} />
                        </div>
                        <button type="submit" onClick={this.handleSubmit} class="btn btn-success">Checkout</button>
                    </div>
                </div>
            </form>
        </div>
            {/*<div className="panel panel-info">
                <div className="panel-heading">
                    <h2>order from {this.props.match.params.restName} is below</h2>
                </div> 
                {/*form here }
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>E-mail</label>
                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Phone no</label>
                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Address</label>
                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-success">Checkout</button>
                    </div>
                </div>
                <div className="panel-body">
                    <h4>Orders</h4>
                    {this.renderItems(this.state.details)}
                    <div className="col-md-12">
                        <h2>Total order cost is Rs: {this.state.tPrice}</h2>
                        <Link to="/"><Button size="large" variant="contained" color="primary">&nbsp;Back</Button></Link>&nbsp;
                        <Button size="large" variant="contained" color="secondary"><PaidIcon/>&nbsp;Order</Button>&nbsp;

                    </div>      
                </div>
            </div>*/}
            <h4 className='text-center'>Super fast, safe & free delivery all over India</h4>
            <Banner /> 
            <div className="panel-body">
                    <h4>Your selected items to order</h4>
                    {this.renderItems(this.state.details)}
                    <div className="col-md-12">
                        <h2>Total order cost is Rs: {this.state.amount}</h2>
                        <Link to="/"><Button size="large" variant="contained" color="primary">&nbsp;Back</Button></Link>&nbsp;
                        <Button size="large" variant="contained" color="secondary"><PaidIcon/>&nbsp;Pay</Button>&nbsp;

                    </div>      
            </div>
            </>
        )
    }

    componentDidMount(){
        var menuItem = sessionStorage.getItem('menu');
        var orderId = []
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item))
            return 'ok'
        })
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res)=> res.json())
        .then((data) => {
            var Totalprice = 0;
            data.map((item) => {
                Totalprice = Totalprice + parseInt(item.menu_price)
                return 'ok'
            })
            this.setState({details:data,amount:Totalprice})
        })

    }
}
