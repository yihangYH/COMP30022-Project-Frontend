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
    return(
        <div>
        <Header btnText="Log in"/>
        <div className='register_section'>
            <ul className='register_section_ul'>
                <li className='register_section_main'>
                <Form  onFinish={handleTotalForm}>
                    <div>
                        <div >
                            <div style={{flex:1}} id="totalForm" className='prfile_pci_upload'>
                                <Form.Item getValueFromEvent={(e)=>{ setTotalFormPic(true);return e.file}} name="pic" >
                                    <Upload alt="just one pic" listType="picture-card" showUploadList={{showPreviewIcon:false,showRemoveIcon:false}} onPreview={()=>{}}>{totalFormPic?null:"Profile Picture"}</Upload>
                                </Form.Item>
                            </div>
                                
                            </div>
                            <Checkbox className='register_password' onChange={ event => onChange(event) }>Show Password</Checkbox>
                        <ul className='resgiste_btn_ul'>
                            <li>
                                <Button htmlType="submit" shape="round" className="resgister_submit_btn" >Submit</Button>
                            </li>
                            <li>
                                <Button htmlType="submit" shape="round" className="resgister_cancle_btn">Cancle</Button>
                            </li>
                        </ul>
                    </div>
                </Form>
                </li>
                <li className='register_pic_li'>
                    <img className='register_pic' src={process.env.PUBLIC_URL + '/register.png'} />
                </li>
            </ul>
        </div>

    </div>
    )

}

export default Register;