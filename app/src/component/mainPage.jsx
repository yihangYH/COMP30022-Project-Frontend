import Header from './header';
import '../css/mainPage.css'
import Post from './post';
import React , { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";


const override = {
    display: "block",
    margin: "0 auto",
    top: "50%",
};



function MaigPage(props){
    const { userId } = useParams()
    useEffect(() => {
        document.title = 'Main Page';
    });
    let [loading, setLoading] = useState(false);
    // let [color, setColor] = useState("#ffffff");
    let[cssStyle, setCssStyle] = useState();
    const style = {
        zIndex:"9999",
        display:"grid", 
        width:"100%" ,
        height:"100%",
        position:"absolute", 
        backgroundColor:"rgba(0,0,0,-1)"
    }

    const[data,setData] = useState();

    const create = () => {
        setCssStyle(style);
        setLoading(true);
        window.location.href = '/createpost/'+userId;
    }

    useState(async ()=>{
        await fetch('http://localhost:8080/getuser/'+userId)
        .then(res => res.json())
        .then(data => {setData(data);console.log(data,"data")})
    },[])

    if(data){
        return(
            <div>
                <Header btnText="Log out" color="black" backgroundColor="white" border="2px solid black" setCssStyle={setCssStyle} setLoading={setLoading} cssStyle={style}/>
                <div style={{display:"block",height:"100%",position:"absolute",width:"100%"}}>
                    <div style={cssStyle}>            
                        <PacmanLoader loading={loading} color="#FF7539" cssOverride={override} size={50} />
                    </div>
                    <div className='main-content'>
                        <button className='create-new' onClick={create}>Create new</button>
                    </div>
                    <div className='post-list'>
                        <ul className='main-page-ul'>
                            {data.posts.map((item,index)=>{
                                return(
                                    <li className='li-posts' key={index}>
                                        <Post data={item} setCssStyle={setCssStyle} setLoading={setLoading}/>
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
            </div>
    
        )
    }
}

export default MaigPage;