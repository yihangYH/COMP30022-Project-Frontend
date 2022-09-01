import React , { useEffect } from 'react';
import Header from './header';
import "antd/dist/antd.min.css";
import '../css/login.css';
import { useState } from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd"

function Login(){
    useEffect(() => {
        document.title = 'Lgoin';
    });
    const [forms, setForms] = useState([])
    const [totalFormPic, setTotalFormPic] = useState(false);
    const [showPassword, setShowpassword] = useState("Password");
    const headFormRequest = (data) => {
        console.log(data,"handleTotalForm");
      };
    const handleTotalForm = (fileds)=>{
        fileds.pics = forms.filter(item=>item.submit);
        headFormRequest(fileds)
    }
    const handleSubForm = (fileds,formIndex,formId)=>{
        const tmp = [...forms];
        tmp[formIndex].submit = true;
        setForms(tmp)
    }
    const onChange = (event)=>{
        if(showPassword === "Password"){
            setShowpassword("text")
        }else{
            setShowpassword("Password")
        }
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
                                        name="email"

                                    >
                                        <Input type="email" placeholder="Email"/>
                                    </Form.Item>

                                    <Form.Item
                                        style={{width:"40%", flex: 1 }}
                                        name="Password"
                                    >
                                        <Input type={showPassword} placeholder="Password"/>
                                    </Form.Item>
                                </div>
                                <Checkbox className='show-password' onChange={ event => onChange(event) }>Show Password</Checkbox>
                            <ul className='login-btn-ul'>
                                <li>
                                    <Button htmlType="submit" shape="round" className="login-submit-btn" >Submit</Button>
                                </li>
                                <li>
                                    <Button htmlType="submit" shape="round" className="login-cancle-btn">Cancle</Button>
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