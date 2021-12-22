import React , {useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./quicsearch.css"
import 'aos/dist/aos.css'; 
import Aos from 'aos';

export default function QuickSearch(props) {

    useEffect(() => {
        Aos.init({duration:2000});
    }, []);
    //console.log(".....>>>>data",props)
    const deliveryUrl = "https://i.ibb.co/f0CpLBc/delivery-removebg-preview.png"

    const listMeal=({quickData}) => {
        if(quickData){
            return quickData.map((item)=>{
                return(
                    <div data-aos="fade-up">
                        <Link to={`/list/${item.mealtype_id}`}>
                            <div class="col-sm-6 col-md-4" key={item.mealtype_id}>
                            <div class="thumbnail">
                                <img src={item.meal_image} alt="..."/>
                                <div class="caption">
                                <h3>{item.mealtype}</h3>
                                </div>
                            </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }else{
            return(
            <center>
                <h5>Loading...please wait for a while</h5>
                <img src="/loading2.gif" style={{height:100,width:100}} />
            </center>
            )
        }

    }

    return (
        <>
        <div class="container">
            <h1 style={{margin:"50px 0px"}}>Your restaurants is in your hands. <span id="order_now">Order Now</span></h1>
            <h1 style={{margin:"50px 0px"}}>Quick Search</h1>
            <div class="row">
                {listMeal(props)}     
            </div>
        </div>
        <center>
            <div data-aos="slide-up">
                <h3 style={{color:"crimson",fontFamily:"cursive"}}>Safe and Touchless delivery at your place. </h3>
                <img className="deliveryimage" src={deliveryUrl} />
            </div>
        </center>
        </>
    )
}
