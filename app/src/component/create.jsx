import { Button, Form, Input, Upload } from "antd"
import "antd/dist/antd.min.css";
import "../css/editCreate.css";
import { useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";

import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "0 auto",
    top: "50%",
};

  

export const Create = (props)=>{
    console.log(props.test)
    const { userId } = useParams()
    const [forms, setForms] = useState([])
    const [baseImg, setBaseImg] = useState([]);
    const [foodPostID, setFoodPostID] = useState([]);
    const [totalFormPic, setTotalFormPic] = useState(false);
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
    // const formFile = (e,formIndex) => {
    //     let data = e.fileList;
    //     data[0].status='done';
    //     const tmp = [...forms];
    //     tmp[formIndex].uploadDone = true;
    //     setForms(tmp)
    //     return e?.fileList;
    // };
    const subFormRequest = async (foodData) => {
        console.log(foodData,"subFormData");
        const data = {
            "name": foodData.header,
            "rate": foodData.rate,
            "comment": foodData.comment,
            "foodImage": foodData.pic,
        }
    
        const res = await fetch('http://localhost:8080/creatFoodPost', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        const response = await res.json();
        console.log(response,"response");
        if(response.status == "true"){
            setCssStyle();
            setLoading(false);
        }
        return response.id;
    };
    const headFormRequest = async (data) => {
        const postData = {
            "name": data.restaurantName,
            "rate": data.rating,
            "comment": data.comment,
            "image": data.pic.thumbUrl,
            "title": data.title,
            "foodPostsId": data.foodPostIDs,
            "location": data.restaurantLocation,
        }
        console.log(postData,"postData");
        const res = await fetch('http://localhost:8080/create/'+data.userId, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        const response = await res.json();
        console.log(response,"response");
        window.location.href = "/mainpage/" + data.userId;
      };
    const backToMain = () => {
        window.location.href = "/mainpage/" + userId;
        // Promise.all(foodPostID).then((values) => {
        //     console.log(values,"values");
        // })
    }

    const handleTotalForm = (fileds)=>{
        setLoading(true);
        setCssStyle(style);
        fileds.pics = forms.filter(item=>item.submit);
        Promise.allSettled(foodPostID).then(value=>{
            const foodPostIDs = value.map(item=>item.value);
            fileds.foodPostIDs = foodPostIDs;
            fileds.userId = userId;
            headFormRequest(fileds)
        }) 

    }
    const handleSubForm = (fileds,formIndex,formId)=>{
        setLoading(true);
        setCssStyle(style);
        setBaseImg([...baseImg,{url:fileds?.pic[0].thumbUrl}]);
        const tmp = [...forms];
        tmp[formIndex].submit = true;
        const id = subFormRequest({...fileds,pic:fileds.pic[0].thumbUrl,subformId:formId})
        setFoodPostID([...foodPostID, id])
        setForms(tmp)
        // console.log(forms)
    }

    const formFileEventHandle = (e,formIndex) => {
        if(e.fileList.length>0){
            let data = e.fileList;
            data[0].status='done';
            const tmp = [...forms];
            tmp[formIndex].uploadDone = true;
            setForms(tmp)
            return e?.fileList;
        }
        // remove image from sun-form
        const tmp = [...forms];
        tmp[formIndex].uploadDone = false;
        setForms(tmp)
        return e?.fileList;
      };
    const [firstName, setFirstName] = useState('Default value');
    return (      
        <div style={{flex:1}} id="mf">
            <div style={cssStyle}>            
                    <PacmanLoader loading={loading} color="#FF7539" cssOverride={override} size={50} />
            </div>
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
                            name="rating"
                            label="Rating" rules={[
                                {
                                required: true,
                                message: 'Please add rating',
                                },
                            ]} 
                        >
                            <Input style={{color:"red",fontSize:32}} type="number" placeholder="Rating" max={5} min={0} step={0.1}/>
                        </Form.Item>

                        <Form.Item
                            style={{ marginRight: "20px", flex: 1 }}
                            name="restaurantName"
                            label="🍽️ " rules={[
                                {
                                required: true,
                                message: 'Please add restaurant name',
                                },
                            ]} 
                        >
                            <Input placeholder="Restaurant Name"/>
                        </Form.Item>

                        <Form.Item
                            style={{ marginRight: "20px", flex: 1 }}
                            name="restaurantLocation"
                            label="📍" rules={[
                                {
                                required: true,
                                message: 'Please add restaurant location',
                                },
                            ]} 
                        >
                            <Input placeholder="Restaurant Location"/>
                        </Form.Item>
                    </div>
                    <div style={{flex:1,aspectRatio:2/1}} id="totalForm">
                        <Form.Item getValueFromEvent={(e)=>{ setTotalFormPic(e.fileList.length>0?true:false);return e.file}} name="pic" rules={[
                                {
                                required: true,
                                message: 'Please add restaurant picture',
                                },
                            ]} >
                            <Upload alt="just one pic" listType="picture-card" 
                            showUploadList={{showPreviewIcon:false,showRemoveIcon:true}} 
                            onPreview={()=>{}}>{totalFormPic?null:"Add picture"}</Upload>
                        </Form.Item>

                    </div>
                </div>
                <Form.Item
                        style={{  flex: 1 }}
                        name="comment" rules={[
                            {
                            required: true,
                            message: 'Please add restaurant comment',
                            },
                        ]} 
                    >
                        <Input.TextArea placeholder="Comment" style={{border:"1px solid #a8a8a8"}}  autoSize={{ minRows: 3, maxRows: 5 }}/>
                    </Form.Item>
                <div style={{display:"flex",alignItems:"flex-start"}}>
                    <Form.Item name="pics" >
                        <Upload fileList={baseImg} listType="picture-card" className="upload-list-inline" 
                        showUploadList={{showPreviewIcon:false,showRemoveIcon:false}} />
                        
                    </Form.Item>
                    {baseImg.length<6&&forms.length<6&&
                    <div style={{aspectRatio:1,width:"100px",display:'flex',justifyContent:"center",alignItems:"center",border:"2px solid grey", 
                    cursor:"pointer"}} onClick={()=>setForms([...forms,{subformid:"form"+Math.random().toString(36).slice(2)}])}>
                        
                        <PlusOutlined />
                    </div>}
                    
                </div>
                <Button htmlType="button" shape="round" className="cancle-btn" onClick={backToMain}>Cancle</Button>
                <Button htmlType="submit" shape="round" className="submit-btn">Submit</Button>
            </Form >
            {
                forms.map((item,index)=>(
                <Form key={item.subformid} style={{margin:"10% 0px",border:"1px solid #c8c8c8",padding:"10px"}} onFinish={(fileds)=>handleSubForm(fileds,index,item.subformid)} className="new-food-selection">
                    <div style={{display:"flex" }} >
                        <Form.Item  style={{flex:0}} name="pic" valuePropName="fileList" getValueFromEvent={(e)=>formFileEventHandle(e,index)} rules={[
                                {
                                required: true,
                                message: 'Please add food Picture',
                                },
                            ]} >
                            <Upload disabled={item.submit} listType="picture-card" showUploadList={{showPreviewIcon:false,showRemoveIcon:true}}>
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
                                message: 'Please add rating',
                                },
                            ]}>
                                <Input disabled={item.submit} placeholder="Rating" type="number" max={5} min={0} step={0.1}/>
                            </Form.Item>
                        </div>
                    </div>
                    

                    <Form.Item
                        style={{ flex: 1 }}
                        name="foodComment" rules={[
                            {
                            required: true,
                            message: 'Please add food comment',
                            },
                        ]} 
                    >
                        <Input.TextArea placeholder="Comment" disabled={item.submit} autoSize={{ minRows: 3, maxRows: 5 }}/>
                    </Form.Item>
                    {item.submit?null:<div>
                       
                        <Button onClick={()=>setForms(forms.filter(form=>form.subformid!==item.subformid))} shape="round" type="primary" style={{marginRight:"10px"}}>Cancel</Button>
                        <Button htmlType="submit" shape="round" style={{float:"right"}}>Save</Button>
                    </div>
                    
                    }
                </Form>))
                
            }
        </div>          
    )
}