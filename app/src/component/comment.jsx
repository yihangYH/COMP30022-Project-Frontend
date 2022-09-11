import React , { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from './header';
import '../css/comment.css'
import Food from './food';
function Comment(props){
    const { postId } = useParams()
    const { userId } = useParams()
    useEffect(() => {
        document.title = 'Post';
    })
    const backToMain = () => {
        window.location.href = '/mainpage/'+userId;;
    }
    const editClicked = () => {
        window.location.href = '/editpost/'+userId+'/'+postId;
    }
    const[data,setData] = useState();


    useState(async ()=>{
        await fetch('http://localhost:8080/getpost/'+postId)
        .then(res => res.json())
        .then(data => {setData(data);console.log(data,"data")})
    },[])
    if(data != null){
        return(
            <div>
                <Header btnText="Log out" />
                <div className='button'>
                    <button className='back' onClick={backToMain}>Back</button>
                    <button className='edit' onClick={editClicked}>Edit</button>
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
                                    {/* <li>
                                        <Food />
                                    </li>
                                    <li>
                                        <Food />
                                    </li>
                                    <li>
                                        <Food />
                                    </li>
                                    <li>
                                        <Food />
                                    </li> */}
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