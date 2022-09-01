import { Button, Form, Input, Upload } from "antd"
import "antd/dist/antd.min.css";
import "../css/editCreate.css";
import { useState } from "react";
import { PlusOutlined } from '@ant-design/icons';

const subFormRequest = (data) => {
    console.log(data,"subFormData");
  };
const headFormRequest = (data) => {
    console.log(data,"handleTotalForm");
  };
  

export const Create = (props)=>{
    console.log(props.test)
    const [forms, setForms] = useState([])
    const [baseImg, setBaseImg] = useState([]);
    const [totalFormPic, setTotalFormPic] = useState(false);
    const formFile = (e,formIndex) => {
        let data = e.fileList;
        data[0].status='done';
        const tmp = [...forms];
        tmp[formIndex].uploadDone = true;
        setForms(tmp)
        return e?.fileList;
      };
      
    const handleTotalForm = (fileds)=>{
        fileds.pics = forms.filter(item=>item.submit);
        headFormRequest(fileds)
    }
    const handleSubForm = (fileds,formIndex,formId)=>{
        setBaseImg([...baseImg,{url:fileds?.pic[0].thumbUrl}]);
        const tmp = [...forms];
        tmp[formIndex].submit = true;
        subFormRequest({...fileds,pic:fileds.pic[0].thumbUrl,subformId:formId})
        setForms(tmp)
    }
    const [firstName, setFirstName] = useState('Default value');
    return (      
        <div style={{flex:1}} id="mf">
            <Form
                style={{ flex: 1 ,border:"1px solid #c8c8c8",padding:"10px" }}
                onFinish={handleTotalForm} className="title-selection"
            >
                <div style={{display:"flex",marginBottom:"10px"}}>
                    <div style={{flex:3}} >
                        <Form.Item
                            style={{ marginRight: "20px", flex: 1 }}
                            name="title" rules={[
                                {
                                required: true,
                                message: 'Please add post title',
                                },
                            ]} 
                        >
                            <Input placeholder="Title..." style={{fontSize:"32px",fontWeight:600}} />
                        </Form.Item>

                        <Form.Item
                            style={{ marginRight: "20px", flex: 1,}}
                            name="Rating"
                            label="Rating" 
                        >
                            <Input style={{color:"red",fontSize:32}} type="number" placeholder="Rating" max={5} min={0} step={0.1}/>
                        </Form.Item>

                        <Form.Item
                            style={{ marginRight: "20px", flex: 1 }}
                            name="Restaurant Name"
                            label="🍽️ "
                        >
                            <Input placeholder="Restaurant Name"/>
                        </Form.Item>

                        <Form.Item
                            style={{ marginRight: "20px", flex: 1 }}
                            name="Restaurant Location"
                            label="📍"
                        >
                            <Input placeholder="Restaurant Location"/>
                        </Form.Item>
                    </div>
                    <div style={{flex:1,aspectRatio:2/1}} id="totalForm">
                        <Form.Item getValueFromEvent={(e)=>{ setTotalFormPic(true);return e.file}} name="pic">
                            <Upload alt="just one pic" listType="picture-card" showUploadList={{showPreviewIcon:false,showRemoveIcon:false}} onPreview={()=>{}}>{totalFormPic?null:"Add picture"}</Upload>
                        </Form.Item>

                    </div>
                </div>
                <Form.Item
                        style={{  flex: 1 }}
                        name="comment"
                    >
                        <Input.TextArea placeholder="Comment" style={{border:"1px solid #a8a8a8"}}  autoSize={{ minRows: 3, maxRows: 5 }}/>
                    </Form.Item>
                <div style={{display:"flex",alignItems:"flex-start"}}>
                    <Form.Item name="pics" >
                        <Upload fileList={baseImg} listType="picture-card" className="upload-list-inline" showUploadList={{showPreviewIcon:false,showRemoveIcon:false}} />
                        
                    </Form.Item>
                    {baseImg.length<6&&forms.length<6&&<div style={{aspectRatio:1,width:"100px",display:'flex',justifyContent:"center",alignItems:"center",border:"2px solid grey", cursor:"pointer"}} onClick={()=>setForms([...forms,{subformid:"form"+Math.random().toString(36).slice(2)}])}>
                        
                        <PlusOutlined />
                    </div>}
                    
                </div>
                <Button htmlType="submit" shape="round" className="submit-btn">Submit</Button>
                <Button htmlType="submit" shape="round" className="cancle-btn">Cancle</Button>
            </Form >
            {
                forms.map((item,index)=>(
                <Form key={item.subformid} style={{margin:"10% 0px",border:"1px solid #c8c8c8",padding:"10px"}} onFinish={(fileds)=>handleSubForm(fileds,index,item.subformid)} className="new-food-selection">
                    <div style={{display:"flex" }} >
                        <Form.Item  style={{flex:0}} name="pic" valuePropName="fileList" getValueFromEvent={(e)=>formFile(e,index)} rules={[
                                {
                                required: true,
                                message: 'Please add food Picture',
                                },
                            ]} >
                            <Upload disabled={item.submit} listType="picture-card" onPreview={()=>{console.log("preview");}} showUploadList={{showPreviewIcon:false,showRemoveIcon:false}}>
                                {item?.uploadDone?null:"Food Picture"}
                            </Upload>
                        </Form.Item>
                        
                        <div style={{flex:1,display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
                            <Form.Item name="header" rules={[
                                {
                                required: true,
                                message: 'Please add food name',
                                },
                            ]}>
                                <Input disabled={item.submit} placeholder="Food Name" style={{fontSize:32}} />
                            </Form.Item>
                            <Form.Item name="rate" rules={[
                                {
                                required: true,
                                message: 'Please add rating number',
                                },
                            ]}>
                                <Input disabled={item.submit} placeholder="Rating" type="number" max={5} min={0} step={0.1}/>
                            </Form.Item>
                        </div>
                    </div>
                    

                    <Form.Item
                        style={{ flex: 1 }}
                        name="comment"
                    >
                        <Input.TextArea placeholder="Comment" disabled={item.submit} autoSize={{ minRows: 3, maxRows: 5 }}/>
                    </Form.Item>
                    {item.submit?null:<div>
                        <Button onClick={()=>setForms(forms.filter(form=>form.subformid!==item.subformid))} shape="round" type="primary" style={{marginRight:"10px"}}>cancel</Button>
                        <Button htmlType="submit" shape="round" >save</Button>
                    </div>
                    
                    }
                </Form>))
                
            }
        </div>          
    )
}