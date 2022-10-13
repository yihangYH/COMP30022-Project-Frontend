import React , { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from './header';
import '../css/comment.css'
import Food from './food';
import Swal from 'sweetalert2'
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "0 auto",
    top: "50%",
};

const localGetPostEndpoint = 'http://localhost:8080/getPost/';
const productionGetPostEndpoint = 'https://restaurant-at-unimelb-api.herokuapp.com/getPost/';

const localshareEndpoint = 'http://localhost:3000/share/';
const productionshareEndpoint = 'https://restaurant-at-unimelb-api.herokuapp.com/share/';

function Comment(props){
    const url = window.location.href;
    const isShared = url.includes("share");
    const sharedStyle = {
        display:"none"
    }
    if(!isShared){
        sharedStyle.display = "";
    }
    if(localStorage.getItem("user")==null && !isShared){
        window.location.href = '/';
    }
    const { postId } = useParams()
    const { userId } = useParams()
    useEffect(() => {
        document.title = 'Post';
    })
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
    const backToMain = () => {
        setCssStyle(style);
        setLoading(true);
        window.location.href = '/mainpage/'+userId;;
    }
    const editClicked = () => {
        setCssStyle(style);
        setLoading(true);
        window.location.href = '/editpost/'+userId+'/'+postId;
    }

    const ShareClicked = () => {
        console.log("asd")
        Swal.fire({
            title: 'Please copy the link below',
            text: productionshareEndpoint + userId + "/" + postId,
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    const[data,setData] = useState();


    useState(async ()=>{
        await fetch(productionGetPostEndpoint+postId)
        .then(res => res.json())
        .then(data => {setData(data);console.log(data,"data")})
    },[])
    if(data != null){
        return(
            <div>
                <div style={{display:"block", position:"absolute",  height:"100%", width:"100%"}}>
                    <div style={cssStyle}>            
                        <PacmanLoader loading={loading} color="#FF7539" cssOverride={override} size={50} />
                    </div>
                    <Header btnText="Log out" color="black" backgroundColor="white" border="2px solid black" isShared = {isShared} setCssStyle={setCssStyle} setLoading={setLoading} cssStyle={style} loginOrlogout = {"logout"}/>
                    <div className='button'>
                        <button className='back' style={sharedStyle} onClick={backToMain}>Back</button>
                        <button className='edit' style={sharedStyle} onClick={editClicked}>Edit</button>
                        <button className='share' style={sharedStyle} onClick={ShareClicked}>Share</button>
                    </div>
                </div>
                <div className='detail'>
                    <ul className='detail-list'>
                        <li className='title'>
                            <p>{data.title}</p>
                        </li>
                        <li >
                            <p className='infor'>Rating: 
                            <span className='rate-value'>{data.rate}</span>
                            <span className='rest-name'>
                                🍽️ &nbsp;
                                <span>{data.name}</span>
                            </span>
                            <span className='rest-location'>
                                📍 &nbsp;
                                <span >{data.location}</span>
                            </span>
                            </p>
                        </li>
                        <li>
                            <img className='main-pic' src={data.image} />
                        </li>
                        <li>
                            <p className='description'>
                                {data.comment}
                            </p>
                        </li>
                        <li>
                            <div className='food-element-comment'>
                                <ul>
                                {data.foodPosts.map((item,index)=>{
                                    return(
                                        <li key={index}>
                                            <Food data={item}/>
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    
        )
    }
}

export default Comment;