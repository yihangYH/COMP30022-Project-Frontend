import React , { useEffect } from 'react';
import Header from './header';
import Swal from 'sweetalert2'
import "antd/dist/antd.min.css";
import '../css/login.css';
import { useState } from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd"

function Login(){
    useEffect(() => {
        document.title = 'Lgoin';
    });

    const [showPassword, setShowpassword] = useState("Password");
    const formRequest = (data) => {
        console.log(data.email === "demo@demo.com");
        if(data.email === "demo@demo.com" && data.password === "12345678"){
            
            window.location.href = "/mainpage/1"
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Please enter correct email or password',
                icon: 'error',
                confirmButtonText: 'Retry'
            })
        }
        
      };
    const handleTotalForm = (fileds)=>{
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
        window.location.href = "/"
    }

    return(
        <div>
            <Header btnText="Log in"/>
            <div className='login-section'>
                
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
                                    <Button htmlType="submit" shape="round" className="login-submit-btn">Submit</Button>
                                </li>
                                <li>
                                    <Button htmlType="submit" shape="round" className="login-cancle-btn" onClick={cancel}>Cancle</Button>
                                </li>
                            </ul>
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