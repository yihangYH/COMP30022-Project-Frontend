import React , { useEffect } from 'react';
import Header from './header';
import "antd/dist/antd.min.css";
import Swal from 'sweetalert2'
import '../css/register.css';
import { useState } from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd"

function Register(){
    useEffect(() => {
        document.title = 'Register';
    });
    const [forms, setForms] = useState([])
    const [totalFormPic, setTotalFormPic] = useState(false);
    const [showPassword, setShowpassword] = useState("Password");
    const headFormRequest = async (data) => {
        console.log(data,"data");
        if(data.password != data.confirmPassword){
            Swal.fire({
                title: 'Error!',
                text: 'Please enter password and confirm password not match',
                icon: 'error',
                confirmButtonText: 'Retry'
            })
        }else{
            const registerRequest = {
                "email":data.email,
                "password":data.password,
                "username":data.username,
                "favouriteRestaurant":data.favouriteRestaurant,
                "image":data.pic.thumbUrl
            }
            const res = await fetch('http://localhost:8080/register', {
                method: 'POST',
                body: JSON.stringify(registerRequest),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            const response = await res.json();
            console.log(response,"response");
            console.log(registerRequest,"registerRequest");
            window.location.href = "/login"
        }
        // console.log(data.pic.thumbUrl,"handleTotalForm");
    };
    const handleTotalForm = (fileds)=>{
        headFormRequest(fileds)
    }

    const backToLogin = () => {
        window.location.href = "/login"
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
        <Header btnText="Log in" display="none"/>
        <div className='register-section'>
            <ul className='register-section-ul'>
                <li className='register-section-main'>
                <Form  onFinish={handleTotalForm}>
                    <div>
                        <div >
                            <div style={{flex:1}} id="totalForm" className='prfile-pci-upload'>
                                <Form.Item getValueFromEvent={(e)=>{ setTotalFormPic(e.fileList.length>0?true:false);return e.file}} name="pic" rules={[
                                        {
                                        required: true,
                                        message: 'Please select your profile picture',
                                        },
                                    ]} >
                                    <Upload alt="just one pic" listType="picture-card" showUploadList={{showPreviewIcon:false,showRemoveIcon:true}} >{totalFormPic?null:"Profile Picture"}</Upload>
                                </Form.Item>
                            </div>
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
                                    style={{  width:"40%", flex: 1 }}
                                    name="username" rules={[
                                        {
                                        required: true,
                                        message: 'Please enter your username',
                                        },
                                    ]} 

                                >
                                    <Input placeholder="Username"/>
                                </Form.Item>

                                <Form.Item
                                    style={{width:"40%", flex: 1 }}
                                    name="password" rules={[
                                        {
                                        required: true,
                                        message: 'Please enter your password',
                                        min: 8
                                        },
                                    ]} 
                                >
                                    <Input type={showPassword} placeholder="Password"/>
                                </Form.Item>

                                <Form.Item
                                    style={{width:"40%", flex: 1 }}
                                    name="confirmPassword" rules={[
                                        {
                                        required: true,
                                        message: 'Please enter confirm your password',
                                        },
                                    ]} 
                                >
                                    <Input type={showPassword} placeholder="Confirm Password"/>
                                </Form.Item>

                                <Form.Item
                                    style={{width:"40%", flex: 1 }}
                                    name="favouriteRestaurant" rules={[
                                        {
                                        required: true,
                                        message: 'Please enter your favourite restaurant',
                                        },
                                    ]} 
                                >
                                    <Input placeholder="Favourite Restaurant"/>
                                </Form.Item>
                            </div>
                            <Checkbox className='register-password' onChange={ event => onChange(event) }>Show Password</Checkbox>
                        <ul className='resgiste-btn-ul'>
                            <li>
                                <Button htmlType="submit" shape="round" className="resgister-submit-btn" >Register</Button>
                            </li>
                            <li>
                                <Button htmlType="button" shape="round" className="resgister-cancle-btn" onClick={backToLogin}>Cancel</Button>
                            </li>
                        </ul>
                    </div>
                </Form>
                </li>
                <li className='register-pic-li'>
                    <img className='register-pic' src={process.env.PUBLIC_URL + '/register.png'} />
                </li>
            </ul>
        </div>

    </div>
    )

}

export default Register;