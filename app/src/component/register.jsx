import React , { useEffect } from 'react';
import Header from './header';
import "antd/dist/antd.min.css";
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
    const headFormRequest = (data) => {
        console.log(data.pic.thumbUrl,"handleTotalForm");
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
    return

}

export default Register;