import React,{Component} from 'react';
import "./login.css"
const url = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url,
            {
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            }
        )
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk', data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
            <div className='stream_line'>Login to avail best offers</div>
            <h2 style={{color:'red'}}>{this.state.message}</h2>
            <div className="login">
                <h1 className='text-success'>Login</h1>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter your Password" ></input>
                <div className="button" onClick={this.handleSubmit}>Login</div>
                <div className='text-info'>or</div>
                <div className="button">Register</div>
            </div>
            </>
        )
            {/*<div className="container">
                <br/>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>
                           Login
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h2 style={{color:'red'}}>{this.state.message}</h2>
                        <div className="row">
                            
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>EmailId</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" name="password" value={this.state.password}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
        </div>*/}    
    }
}

export default Login
