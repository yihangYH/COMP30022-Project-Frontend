import React , { useEffect, useState } from 'react';
import Header from './header';
import '../css/home.css';
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "0 auto",
    top: "50%",
};

function Home(){
    useEffect(() => {
        document.title = 'Restaurant @UniMelb';
    });

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
 
    return(
        <div>
            <Header btnText="Log in" setCssStyle={setCssStyle} setLoading={setLoading} cssStyle={style} loginOrlogout = {"login"}/>
            <div className='content'>
                <p>
                    Everyone goes to many restaurants in their lifetime. Are there any restaurants that have impressed you? Is there any food that keeps you coming back for more?
                </p>
                <br></br>
                <p>
                    <strong>Restaurant @UniMelb</strong> is an online platform where everyone can share their thoughts on restaurants! You can post your review of any 
                    restaurant and share your comments with others! You can also upload pictures along with your post and become an ambassador for your favourite restaurant.
                </p>
            </div>
        </div>
    )

}

export default Home;