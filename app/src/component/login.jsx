import React , { useEffect } from 'react';
import Header from './header';
import Swal from 'sweetalert2'
import "antd/dist/antd.min.css";
import '../css/login.css';
import { useState} from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd"
import PacmanLoader from "react-spinners/PacmanLoader";


const override = {
    display: "block",
    margin: "0 auto",
    top: "50%",
};

const localLoginEndpoint = 'http://localhost:8080/login/';
const productionLoginEndpoint = 'https://restaurant-at-unimelb-api.herokuapp.com/login/';

function Login(){
    useEffect(() => {
        document.title = 'Lgoin';
    });
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    let[cssStyle, setCssStyle] = useState();
    const style = {
        zIndex:"9999",
        display:"grid", 
        width:"100%" ,
        height:"100%",
        position:"absolute", 
        backgroundColor:"rgba(0,0,0,-1)"
    }
    const [showPassword, setShowpassword] = useState("Password");
    const formRequest = async(data) => {
        const loginRequest = {
            "email":data.email,
            "password":data.password
        }
        console.log(loginRequest,"loginRequest");
        const res = await fetch(productionLoginEndpoint, {
            method: 'POST',
            body: JSON.stringify(loginRequest),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        localStorage.setItem('user', data.email);
        const response = await res.json();
        console.log(response,"response");
        const url = "/mainpage/"+response.id;
        if(response.status == "true"){
            window.location.href = url
        }else{
            setLoading(false);
            setCssStyle();
            Swal.fire({
                title: 'Error!',
                text: 'Please Check The Password And Email',
                icon: 'error',
                confirmButtonText: 'Retry'
            })
        }   
        
    };

    const registerClicked = () => {
        window.location.href = "/register"
    }

    const handleTotalForm = (fileds)=>{
        console.log(fileds,"fileds");
        setCssStyle(style);
        setLoading(true);
        formRequest(fileds)
    }
    const onChange = (event)=>{
        if(showPassword === "Password"){
            setShowpassword("text")
        }else{
            setShowpassword("Password")
        }
    }
    const cancel = ()=>{
        setCssStyle(style);
        setLoading(true);
        window.location.href = "/"        
        
    }

    return(
        <div>
            <Header btnText="Log in" display="none"/>
            <div className='login-section'>
                <div style={cssStyle}>            
                    <PacmanLoader loading={loading} color="#FF7539" cssOverride={override} size={50} />
                </div>
                <ul className='login-section-ul'>
                    <li className='login-section-main'>
                    <Form  onFinish={handleTotalForm}>
                        <div>
                            <h1 className='Login-title'>Welcome Back!</h1>
                            <div >
                                    <Form.Item
                                        style={{ width:"40%", flex: 1,}}
                                        name="email" rules={[
                                            {
                                            required: true,
                                            message: 'Please enter your email',
                                            },
                                        ]} 

                                    >
                                        <Input type="email" placeholder="Email"/>
                                    </Form.Item>

                                    <Form.Item
                                        style={{width:"40%", flex: 1 }}
                                        name="password" rules={[
                                            {
                                            required: true,
                                            message: 'Please enter your password',
                                            },
                                        ]} 
                                    >
                                        <Input type={showPassword} placeholder="Password"/>
                                    </Form.Item>
                                </div>
                                <Checkbox className='show-password' onChange={ event => onChange(event) }>Show Password</Checkbox>
                            <ul className='login-btn-ul'>
                                <li>
                                    <Button htmlType="submit" shape="round" className="login-submit-btn">Login</Button>
                                </li>
                                <li>
                                    <Button htmlType="button" shape="round" className="login-cancle-btn" onClick={cancel}>Cancel</Button>
                                </li>
                            </ul>
                            <Button htmlType="button" shape="round" className="register-btn" onClick={registerClicked}>Register</Button>
                        </div>
                    </Form>
                    </li>
                    <li className='login-pic-li'>
                        <img className='login-pic' src={process.env.PUBLIC_URL + '/register.png'} />
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Login;