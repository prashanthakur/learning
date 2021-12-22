import React from 'react'

const ViewDisplay = (props) => {

    const rendertable =({orderData}) => {
        if(orderData){
            return orderData.map((item) => {
                return (
                    <tr style={{color:'',backgroundColor:'#CAD5E2'}}>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>Rs:{item.amount}</td>
                        <td>{item.status}</td>
                    </tr>
                )
            })
        }
        else{
            return(
                <div>
                <center>
                <img src="./loading2.gif" style={{height:200,width:200}}/>
                </center>
                </div>
            )
        }
    }
    return (
        <div>
        <center><h3>Orders</h3></center> 
        <table className="table">
            <thead>
                <tr>
                    <th>Rest Name</th>
                    <th>Name</th>
                    <th>phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {rendertable(props)}
            </tbody>
        </table> 
        <h3>Refresh page to be data updated....</h3>
        </div>
    )
}

export default ViewDisplay
