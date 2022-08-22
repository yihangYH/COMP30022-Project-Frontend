import React , { useEffect } from 'react';
import Header from './header';
import '../css/home.css';

function Home(){
    useEffect(() => {
        document.title = 'Restaurant @UniMelb';
      });
    return(
        <div>
            <Header />
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