import React , { useEffect } from 'react';
import Header from './header';
import '../css/home.css';
import ReactDOM from "react-dom";

function Home(){
    useEffect(() => {
        document.title = 'Restaurant @UniMelb';
    });

 
    return(
        <div>
            <Header btnText="Log in"/>
            <div className='content'>
                <p>
                    asdasdasdasdasdasdaddddddddddddd
                </p>
                <p>
                    asdasdasdasdasdasdadddddddddddddasdasdasdasdasdasdadddddddddddddasdasdasdasdasdasdadddddddddddddasdasdasdasdasdasdaddddddddddddd
                </p>
            </div>
        </div>
    )

}

export default Home;