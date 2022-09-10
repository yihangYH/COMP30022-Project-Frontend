import Header from './header';
import '../css/mainPage.css'
import Post from './post';
import React , { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
function MaigPage(props){
    const { userId } = useParams()
    useEffect(() => {
        document.title = 'Main Page';
    });

    const[data,setData] = useState();


    useState(async ()=>{
        await fetch('http://localhost:8080/getuser/'+userId)
        .then(res => res.json())
        .then(data => {setData(data);console.log(data,"data")})
    },[])

    if(data){
        return(
            <div>
                <Header btnText="Log out" color="black" backgroundColor="white" border="2px solid black"/>
                <div className='main-content'>
                    <button className='create-new' onClick={event =>  window.location.href='/createpost/1'}>Create new</button>
                </div>
                <div className='post-list'>
                    <ul className='main-page-ul'>
                        {data.posts.map((item,index)=>{
                            return(
                                <li className='li-posts' key={index}>
                                    <Post data={item}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='profile'>
                    <ul>
                        <li>
                            <img className='profile-pic' src={data.profileImageID} />
                        </li>
                        <li className='profile-name'>
                            {data.username}
                        </li>
                        <li className='prfile-fav-res'>
                            ❤️ &nbsp; {data.favouriteRestaurant}
                        </li>
                    </ul>
                </div>
            </div>
    
        )
    }
}

export default MaigPage;