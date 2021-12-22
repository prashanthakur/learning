import React from "react";
import './listing.css';
import {Link} from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';
import Chip from '@mui/material/Chip';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const ListingDisplay = (props) =>{
    //console.log(props)
    const renderList = ({listData}) =>{
        if(listData){
            if(listData.length>0){

            return listData.map((item) => {
                return(
                    <>
                    <div class="col-md-8 col-sm-10 rest-display-section">
                        <div id="content">
                            <div class="list_content">
                                <div class="images">
                                    <img src={item.restaurant_thumb} alt="image" class="image_display"/> 
                                </div>
                                <div class="name_address"> 
                                <Link to={`/details/${item.restaurant_id}`}><h2 className="rest_name">{item.restaurant_name}</h2></Link>
                                    <p class="fort">Rating : {item.average_rating}&#9733;</p>
                                    <p class="graytext">{item.address}</p>
                                </div>
                                <hr style={{marginTop:60}}/><br/>
                                <div class="menu_cuisines">
                                    <p>Details & Cost &nbsp;:</p>
                                </div>
                                <div class="rate">
                                <p className="mealtype"><Chip label={item.mealTypes[0].mealtype_name} style={{fontSize:"12px",backgroundColor: "#7495df"}}/>
                                &nbsp;<Chip label={item.mealTypes[1].mealtype_name} style={{fontSize:"12px",backgroundColor: "#7495df"}}/><br/> <span className="cusine_span">{item.cuisines[0].cuisine_name} &</span>&nbsp;<span className="cusine_span">{item.cuisines[1].cuisine_name}</span></p>
                                    <p><CurrencyRupeeIcon/> <span className="cost_text">{item.cost}</span></p>
                                </div>
                            </div>
                        </div>
            </div>
                    {/*
                    <div id="content" key={item._id}>
                        <div class="list_content">
                            <div class="images">
                                <img src={item.restaurant_thumb} alt="image" class="image_display"/> 
                            </div>
                            <div class="name_address"> 
                                <Link to={`/details/${item.restaurant_id}`}><h2 class="rest_name">{item.restaurant_name}</h2></Link>
                                <p class="fort">Rating : {item.average_rating}&#9733;</p>
                                <p class="graytext">{item.address}</p>
                            </div>
                            <hr/>
                            <div class="menu_cuisines">
                                <Link to="/"><p>CUISINES:</p></Link>
                                <p>COST FOR TWO :</p>
                            </div>
                            <div class="rate">
                            <p>{item.mealTypes[0].mealtype_name}&nbsp;{item.mealTypes[1].mealtype_name} <button className="btn btn-primary">{item.cuisines[0].cuisine_name}</button>&nbsp;<button className="btn btn-primary">{item.cuisines[1].cuisine_name}</button></p>
                            <p>RS {item.cost}</p>
                            </div>
                        </div>
                    </div>
                    */}
                    </>
                )
            })
        }else{
            return(
                <div className="nodata">
                    <center>
                    <h2><ErrorIcon style={{height:80,width:80,color:'red',marginTop:"-500%"}}/><br/>No data found for this filter</h2>
                    </center>
                </div>
            )
        }
        }
        else{
            return(
            <div>
                <img src="/loading2.gif" style={{height:250, width:250}}/>
                <h1>loading.....</h1>
            </div>
            )
        }
    } 
    return(
        <>
        {/*<div id="main">
            <div id="filter">
                <p class="filter_option">Filters</p>
                <p class="subhead">Select location</p>
                    <select class="text">
                        <option>--Select location--</option>
                        <option>delhi</option>
                        <option>haryana</option>
                        <option>punjab</option>
                    </select>
                    <h3 class="subhead">cuisines</h3>
                    <div class="text">
                    </div>
                    <h4 class="subhead">Cost for Two</h4>
                            <form class="text">
                                <input type="radio" name="cost"/>
                                <label for="male">less than Rs 500</label><br/>
                                <input type="radio" name="cost"/>
                                <label for="female">Rs 500 to Rs 1000</label><br/>
                                <input type="radio" name="cost"/>
                                <label for="other">Rs 1000 to Rs 1500</label><br/>
                                <input type="radio" name="cost"/>
                                <label for="male">Rs 1500 to Rs 2000</label><br/>
                                <input type="radio"name="cost"/>
                                <label for="male">Rs 2000+</label>
                            </form>
                            <h3 class="subhead">Sort</h3>
                            <div class="text">
                            <input type="radio" name="sort"/>
                            <label for="lowtohigh">Price low to high</label><br/>
                            <input type="radio" name="sort"/>
                            <label for="hightolow">Price high to low</label>
                </div>
            </div>
    </div>*/}
        <div class="row">
            {renderList(props)}
        </div>
    </>
    )
}

export default ListingDisplay