import React , {Component} from 'react';
import axios from 'axios';
import '../listing/listing.css'
 //sessionStorage.setItem('mealId',mealId)

 const url = "https://apiforeveryone.herokuapp.com/filter"
 

 class CuisineFilter extends Component{

    filterCuisine = (event) => {
        let mealId= sessionStorage.getItem('mealId');
        let cuisineId = event.target.value;
        let filterUrl;
        if(cuisineId == ""){
            filterUrl= `${url}/${mealId}`
        }
        else{
            filterUrl= `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(filterUrl)
        .then((res) =>{this.props.restPerCuisine(res.data)})
    }
     render(){
         return(
             <>
                <div onChange={this.filterCuisine}>
                <div class="col-md-12 col-sm-6 col-xs-12 col-div-for-m">
                    <h4>Cusine filter</h4>
                    <div className="fl"><input type="radio" name="cuisine" value="" />&nbsp;&nbsp;<label>All</label></div>
                    <div className="fl"><input type="radio" name="cuisine" value="1"/>&nbsp;&nbsp;<label>North Indian</label></div>
                    <div className="fl"><input type="radio" name="cuisine" value="2"/>&nbsp;&nbsp;<label>south indian</label></div>
                    <div className="fl"><input type="radio" name="cuisine" value="3"/>&nbsp;&nbsp;<label>chinese</label></div>
                    <div className="fl"><input type="radio" name="cuisine" value="4"/>&nbsp;&nbsp;<label>fast food</label></div>
                    <div className="fl"><input type="radio" name="cuisine" value="5"/>&nbsp;&nbsp;<label>street food</label></div>
                </div>
                </div>
             </>
         )
     }
 }


 export default CuisineFilter;