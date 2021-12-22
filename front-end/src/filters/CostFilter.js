import React , {Component} from 'react';
import axios from 'axios';
import '../listing/listing.css'

 const url = "https://apiforeveryone.herokuapp.com/filter"


 class CostFilter extends Component{

    filterCost = (event) => {
        let mealId= sessionStorage.getItem('mealId');
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1]; 
        let filterUrl;
        if(event.target.value == ""){
            filterUrl= `${url}/${mealId}`
        }
        else{
            filterUrl= `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(filterUrl)
        .then((res) =>{this.props.restPerCost(res.data)})
    }

     render(){
         return(
        <>
            <div className="cost-div-mrgin">
            <div class="row">
            <div class="col-md-12 col-sm-6 col-xs-12 cost-fl-m" style={{marginLeft:-32}} onChange={this.filterCost}>
               <h4>Cost filter</h4>
               <div id="fl"><input type="radio" name="cuisine" value="" />&nbsp;&nbsp;<label>All</label></div>
               <div id="fl"><input type="radio" name="cuisine" value="201-300"/>&nbsp;&nbsp;<label>201-300</label></div>
               <div id="fl"><input type="radio" name="cuisine" value="301-600"/>&nbsp;&nbsp;<label>301-600</label></div>
               <div id="fl"><input type="radio" name="cuisine" value="601-1000"/>&nbsp;&nbsp;<label>601-1000</label></div>
               <div id="fl"><input type="radio" name="cuisine" value="1001-1500"/>&nbsp;&nbsp;<label>1001-1500</label></div>

            </div>
            </div>
            </div>
        </>
         )
     }
 }


 export default CostFilter;