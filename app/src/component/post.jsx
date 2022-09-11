import React from 'react';
import '../css/post.css'
import { useParams } from "react-router-dom";
function Post(props){
    const { userId } = useParams()
    const handleClick = () => {
        
        window.location.href = `/comment/${userId}/${props.data.id}`;
        const test = `/comment/${userId}/${props.data.id}`
        console.log(test)
    }
    return(
        <div>
            <div className='post-content'>
                <ul className='content-pic'>
                    <li className='content-text'>
                        <div className='post-title'>
                            <ul className='list'>
                                <li onClick={handleClick} style={{cursor:"pointer"}} className="li-title"><p>{props.data.title}</p></li>
                                <li className='li-rating'>
                                    Rating:
                                    <span className='li-rating-value'>{props.data.rate}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='res-name'>
                                    🍽️ 
                                    <span className='name-text'>{props.data.name}</span>
                                </li>
                                <li className='res-location'>
                                    📍
                                    <span className='location-text'>{props.data.location}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='time'>
                            <p>{props.data.date}</p>
                        </div>
                    </li>
                    <li className='food-pic-in-post'>
                        <img className='pic' src={props.data.image} />
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Post;