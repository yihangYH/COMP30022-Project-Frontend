import React , { useEffect } from 'react';
import Header from './header';
import '../css/home.css';

function Home(){
    useEffect(() => {
        document.title = 'Restaurant @UniMelb';
    });

 
    return(
        <div>
            <Header btnText="Log in"/>
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