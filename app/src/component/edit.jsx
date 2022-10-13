import { Button, Form, Input, Upload } from "antd"
import "antd/dist/antd.min.css";
import "../css/editCreate.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlusOutlined } from '@ant-design/icons';
import PacmanLoader from "react-spinners/PacmanLoader";
import Swal from 'sweetalert2'

const override = {
    display: "block",
    margin: "0 auto",
    top: "50%",
};

const localGetPostEndpoint = 'http://localhost:8080/getPost/';
const productionGetPostEndpoint = 'https://restaurant-at-unimelb-api.herokuapp.com/getPost/';

const localDeletePostEndpoint = 'http://localhost:8080/deletePost/';
const productionDeletePostEndpoint = 'https://restaurant-at-unimelb-api.herokuapp.com/deletePost/';

const localCreatFoodPostEndpoint = 'http://localhost:8080/creatFoodPost/';
const productionCreatFoodPostEndpoint = 'https://restaurant-at-unimelb-api.herokuapp.com/creatFoodPost/';

const localUpdatePostEndpoint = 'http://localhost:8080/updatePost/';
const productionUpdatePostEndpoint = 'https://restaurant-at-unimelb-api.herokuapp.com/updatePost/';

const localDeleteFoodPostEndpoint = 'http://localhost:8080/deleteFoodPost/';
const productionDeleteFoodPostEndpoint = 'http://restaurant-at-unimelb-api.herokuapp.com/deleteFoodPost/';



const form = {}

const data = []

export const Edit = (url)=>{

    const [total, setTotal] = useState(null);

    const [forms, setForms] = useState([])
    const { postId } = useParams()
    const { userId } = useParams()
    const [foodPostID, setFoodPostID] = useState([]);
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

 const [baseImg, setBaseImg] = useState([]);

 const [totalFormPic, setTotalFormPic] = useState([]);
    const [fileList, setFileList] = useState();
 
    const onChange= ({ fileList: newFileList }) => {
        setTotalFormPic(newFileList);
    };
    useEffect(() => {
        const getDataPromise = fetch(productionGetPostEndpoint + postId);
        getDataPromise.then(res => res.json())
        .then(data=>{
            // console.log(data)
            setTotal(data);
            const image = [
                {
                    "uid": data.id,
                    "thumbUrl": data.image,
                }
            ]
            const foodImage = []
            data.foodPosts.map((food)=>{
                const temp = {
                    "uid": food.id,
                    "thumbUrl": food.foodImage,
                }
                foodImage.push(temp)
            })

            setTotalFormPic(image)
            setBaseImg(foodImage);
            data.foodPosts.map((food)=>{
                // console.log(food)
                const temp = {
                    "uid": food.id,
                    "thumbUrl": food.foodImage,
                }
                food.pic = [temp]
            })
            console.log(data.foodPosts)
            setForms(data.foodPosts)


        })

    }, [])
 
    const handleTotalForm = (fileds)=>{
        setCssStyle(style);
        setLoading(true);
        console.log(fileds)
        fileds.pics = forms.filter(item=>item.submit);
        Promise.allSettled(foodPostID).then(value=>{
            const foodPostIDs = value.map(item=>item.value);
            fileds.foodPostIDs = foodPostIDs;
            fileds.userId = userId;
            fileds.pics = baseImg;
            fileds.pic = totalFormPic
            headFormRequest(fileds)
        }) 
        
    }

    const handleSubForm = (fileds,formIndex,formId)=>{
        // console.log(formIndex,baseImg.length-1);
        setCssStyle(style);
        setLoading(true);
        if(formIndex<=baseImg.length-1){
            console.log('leng',fileds);
            const tmp = [...baseImg];
            tmp[formIndex].thumbUrl = fileds?.pic.file?.thumbUrl||fileds.pic[0].thumbUrl;
            tmp[formIndex].submit = true
            setBaseImg(tmp);
            const foodDate = {
                "name": fileds.name,
                "comment": fileds.comment,
                "rate": fileds.rate,
                "pic": {
                    "url":fileds.pic[0].thumbUrl
                }
            }
            console.log(foodDate)
            const id = subFormRequest(foodDate)
            setFoodPostID([...foodPostID,id])
            setForms(forms.map((item,index)=>{if(formIndex===index){item.submit=true}; return item}))
            return 
        }
        // console.log(fileds,'ds');
        if(fileds?.pic.file?.thumbUrl){
            setBaseImg([...baseImg,{url:fileds?.pic.file.thumbUrl}]);
            const tmp = [...forms];
            tmp[formIndex].submit = true;
            const id = subFormRequest({...fileds,pic:{url:fileds.pic.file.thumbUrl,uid:fileds.pic.file.uid},id:formId})
            setFoodPostID([...foodPostID,id])
            setForms(tmp)
        }
    }
    const backToMain = async() => {
        setCssStyle(style);
        setLoading(true);
        const res = await fetch(productionDeletePostEndpoint+userId+'/'+postId, {
                method: 'Delete',
            })
            // const response = await res.json();
            // console.log(response,"response");
            window.location.href = "/mainpage/" + userId;
    }
    const subFormRequest = async (foodData) => {
        console.log(foodData,"subFormData");
        const data = {
            "name": foodData.name,
            "rate": foodData.rate,
            "comment": foodData.comment,
            "foodImage": foodData.pic.url,
        }
        const res = await fetch(productionCreatFoodPostEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        const response = await res.json();
        console.log(response,"response");
        if(response.status === "true"){
            setCssStyle();
            setLoading(false);
        }
        return response.id;
    };
    const headFormRequest = async (data) => {
        console.log(data,"handleTotalForm");
        console.log(foodPostID,"foodPostID");
        const body = {
            "name":data.name,
            "location":data.location,
            "title":data.title,
            "comment":data.comment,
            "rate":data.rate,
            "image":data.pic[0].thumbUrl,
            "foodPostsId": data.foodPostIDs,
        }
        console.log(body,"body");
        if(data.foodPostIDs.length !== data.pics.length){
            setCssStyle();
            setLoading(false);
            Swal.fire({
                title: 'Error!',
                text: 'Please Save All Food Post Before Submit',
                icon: 'error',
                confirmButtonText: 'Retry'
            })
            
            return;
        }else{
            const res = await fetch(productionUpdatePostEndpoint +postId + '/' + userId, {
                method:'POST',
                body: JSON.stringify(body),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            
            })
            const response = await res.json();
            console.log(response,"response");
            setCssStyle();
            setLoading(false);
            window.location.href = "/mainpage/" + userId; 
        }
        
    };

    const handleSubFormCancel = async (item,formIndex)=>{
        setCssStyle(style);
        setLoading(true);
        console.log(item,formIndex);
        const res = await fetch(productionDeleteFoodPostEndpoint + item.id + "/" + postId, {
            method: 'Delete',
        })
        setCssStyle();
        setLoading(false);
        setForms(forms.filter(form=>form.id!==item.id));
        setBaseImg(baseImg.filter((_,index)=>index!==formIndex));
    }


    return ( 
        <div style={{flex:1}} id="mf" >
            <div style={cssStyle}>            
                <PacmanLoader loading={loading} color="#FF7539" cssOverride={override} size={50} />
            </div>
            {total&&<Form
                style={{ flex: 1 ,border:"1px solid #c8c8c8",padding:"10px" }}
                onFinish={handleTotalForm} initialValues={total} className="title-selection"
                
            >
                <div style={{display:"flex",marginBottom:"10px"}} >
                    <div style={{flex:3}}>
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
                            name="rate"
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
                            name="name"
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
                            name="location"
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
                    <div style={{flex:1,aspectRatio:2/1}} id="totalFormRightPic">
                        <Form.Item getValueFromEvent={(({fileList})=>fileList.map(img=>img))} name="pic">
                            <Upload fileList={totalFormPic} onChange={onChange} alt="just one pic" listType="picture-card" showUploadList={{showPreviewIcon:false,showRemoveIcon:true}} onPreview={()=>{}} >{totalFormPic.length>0?null:"Add picture"}</Upload>
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
                            <Upload fileList={baseImg} listType="picture-card" className="upload-list-inline" showUploadList={{showPreviewIcon:false,showRemoveIcon:false}} />
                        </Form.Item>
                            {baseImg.length<6&&forms.length<6&&<div style={{aspectRatio:1,width:"100px",display:'flex',justifyContent:"center",alignItems:"center",border:"2px solid grey"}} onClick={()=>setForms([...forms,{subformid:"form"+Math.random().toString(36).slice(2)}])}>
                        <PlusOutlined />
                    </div>}
                </div>  
                <Button htmlType="button" shape="round" className="cancle-btn" onClick={backToMain}>Delete</Button>
                <Button htmlType="submit" shape="round" className="submit-btn">Submit</Button>
            </Form>}
            {
                forms.map((item,index)=>(
                <Form key={item.id} style={{margin:"55px 0px",border:"1px solid #c8c8c8",padding:"10px", borderRadius:"20px"}} onFinish={(fileds)=>handleSubForm(fileds,index,item.subformid)} initialValues={item} className="new-food-selection"> 
                    <div style={{display:"flex"}}>
                        <Form.Item  style={{flex:0}} name="pic"  ules={[
                                    {
                                    required: true,
                                    message: 'Please add food Picture',
                                    },
                                ]}>
                            <Upload fileList={item.pic} onChange={(e)=>setForms(forms.map((x,i)=>{if(i===index){x.pic=e.fileList};return x}))} disabled={item.submit} listType="picture-card" onPreview={()=>{console.log("preview")}} showUploadList={{showPreviewIcon:false,showRemoveIcon:true}}>
                                {item?.pic?.length>0?null:"Food Picture"}
                            </Upload>
                        </Form.Item>

                        
                        <div style={{flex:1,display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
                            <Form.Item name="name" ules={[
                                    {
                                    required: true,
                                    message: 'Please add food name',
                                    },
                                ]}>
                                <Input disabled={item.submit} placeholder="Food Name" style={{fontSize:32}}/>
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
                        name="comment" rules={[
                            {
                            required: true,
                            message: 'Please add food Comment',
                            },
                        ]} 
                    >
                        <Input.TextArea placeholder="Food Comment" disabled={item.submit} autoSize={{ minRows: 3, maxRows: 5 }}/>
                    </Form.Item>
                    {item.submit?null:<div>

                        <Button onClick={()=>handleSubFormCancel(item,index)} shape="round" type="primary" style={{marginRight:"10px"}}>Delete</Button>
                        <Button htmlType="submit" shape="round" style={{float:"right"}} >save</Button>
                    </div>}
                </Form>))
            }
        </div>          
    )
}