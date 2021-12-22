import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom'


{/*import React from 'react'
import './header.css'
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    bgcolor: '#dfe6e9',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

function HeaderMain() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openReg, setOpenReg] = React.useState(false);
    const handleOpenReg = () => setOpenReg(true);
    const handleCloseReg = () => setOpenReg(false);

    const notify = () => toast.error('Invalid Credentials', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    return (
        <>
        <div>
        <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
        </div>

        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style} className="modal-box">
                <Typography id="modal-modal-title" variant="h4" component="h2" style={{color:"crimson"}}>
                    Welcome Back !
                </Typography>
                <div id="modal-modal-description" sx={{ mt: 2 }}>
                    <div class="input-group">
                        <label>UserName</label>
                        <input type="text" class="form-control" placeholder="Username"/>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div style={{marginTop:10,textAlign:"center"}}>
                        <Button variant="contained" color="success" size="large" onClick={notify}>Login</Button>
                    </div>
                </div>
                </Box>
            </Modal>
        </div>

        <div>
            <Modal
                open={openReg}
                onClose={handleCloseReg}
                aria-labelledby="modal-modal-register"
                aria-describedby="modal-modal-desc-register"
                >
                <Box sx={style}>
                <Typography id="modal-modal-register" variant="h4" component="h2" style={{color:"crimson"}}>
                    Edumato !
                </Typography>
                <div id="modal-modal-desc-register" sx={{ mt: 2 }}>
                    <div class="input-group">
                        <label>E-mail</label>
                        <input type="email" class="form-control" placeholder="E-mail"/>
                    </div>
                    <div class="input-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Password"/>
                    </div>
                    <div style={{marginTop:10,textAlign:"center"}}>
                        <Button variant="contained" color="success" size="large" onClick={notify}>Register</Button>
                    </div>
                </div>
                </Box>
            </Modal>
        </div>


        <header id="header">
            <div id="logo_main">
                <Link style={{textDecoration:"none"}} to="/"><p id="heading">Ed<sup className="umato">umato</sup></p></Link>
            </div>
            
            <div id="social">
                <a id="login" onClick={handleOpen}>Login</a><Link to="/login">in</Link><Link to="/register_new_user">reg</Link>
                <a onClick={handleOpenReg} id="createaccount">Create an account</a>
            </div>
        </header> 
        </>
    )
}

export default HeaderMain*/}


const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"
class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        this.setState({userData:''});
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userData');
        this.props.history.push('/')

    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outputArry = [data.name,data.email,data.phone,data.role];
            sessionStorage.setItem('userData', outputArry);
            return(
                <>
                    <span style={{fontSize:20}}>Hi , {this.state.userData.name}</span>
                    &nbsp;
                    <button className="btn btn-info" style={{backgroundColor:"gray",border:"none"}} onClick={this.handleLogout}>Logout</button>
                </>
            )
        }else{
            return(
                <>
                    <Link to="/login" style={{backgroundColor:"white",fontSize:16,padding:5,borderRadius:5}}>
                        <span className="glyphicon glyphicon-log-in"> LogIn</span>
                    </Link> &nbsp;
                    <Link to="/register_new_user" style={{backgroundColor:"white",fontSize:16,padding:5,borderRadius:5}}>
                        <span className="glyphicon glyphicon-user"> Register</span>
                    </Link>
                </>
            )
            
        }
    }
    render(){
        return(
            <header id="header" style={{backgroundColor:"##bdc3c7",height:75}}>
                <div id="logo_main">
                    <Link to="/"><h1 id="headingListing">E!</h1></Link>
                    {
                        this.state.userData.name ? <Link to="/viewOrder" style={{fontSize:20,color:"black"}}>Orders</Link> : ""
                    }
                    
                </div>
                <div className="logoRight">
                    {this.conditionalHeader()}
                    
                </div>
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => { 
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);
