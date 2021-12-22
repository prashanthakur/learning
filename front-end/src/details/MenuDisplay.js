import React,{Component} from 'react'
import { withRouter } from 'react-router';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import 'aos/dist/aos.css'; 
import Aos from 'aos';
import { Link } from 'react-router-dom'

var orderId = [];
class MenuDisplay extends Component{
    constructor(props){
        super(props);


        this.state={
            orders:[],
            cartShow : Number(0)
        }
    }
    
    
    placeOrder =(id) =>{
        orderId.push(id)
        //this.orderId.push(id)
        //console.log(orderId)
        this.props.finalOrder(orderId)
        this.state.cartShow = this.state.cartShow + 1
    }

    removeOrder = (id) => {
        orderId.splice(orderId.indexOf(id.toString()),1)
        this.props.finalOrder(orderId)
        if(this.state.cartShow > 0){
        this.state.cartShow = this.state.cartShow - 1
        }else{
            this.state.cartShow = Number(0)
        }
    }



    renderMenu = ({menudata}) =>{
        if(menudata){
            return menudata.map((item) => {
                return(
                    <>
                    <div key={item.menu_id}>
                        <div className="col-md-6" data-aos="slide-up">
                            <img src={item.menu_image} style={{height:100,width:200,borderRadius:10}}/>
                            <h4>{item.menu_name} -Rs {item.menu_price}</h4>
                        </div> 
                        <div className="col-md-6" data-aos="slide-up">
                            <button className="btn btn-success" onClick={()=>{this.placeOrder(item.menu_id)}}>Add</button>&nbsp;
                            <button className="btn btn-danger" onClick={()=>{this.removeOrder(item.menu_id)}}>Remove</button>
                        </div> 
                    </div>
                        <hr/>
                    </>
                )
            })
        }
        else{
            return(
                <div>
                <center><img src="../loading2.gif" style={{height:200,width:200}} /></center>
                </div>
            )
        }
    }

    render(){
        console.log("menu>>>>>",this.props)
        return(
        <>
        <div className="col-md-12">
            <h3><ShoppingCart style={{height:40,width:40,color:"green"}}/>{this.state.cartShow}</h3>
            {this.renderMenu(this.props)}
        </div>   
        
        </>
        )
    }

    componentDidMount(){
        Aos.init({
          duration : 2000
        })
      }

}

export default withRouter(MenuDisplay)
