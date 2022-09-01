import Header from './header';
import '../css/mainPage.css'
import Post from './post';
import React , { useEffect } from 'react';
function MaigPage(props){
    useEffect(() => {
        document.title = 'Main Page';
    });
    return(
        <div>
            <Header btnText="Log out" />
            <div className='main-content'>
                <button className='create-new'>Create new</button>
            </div>
            <div className='post-list'>
                <ul className='main-page-ul'>
                    <li>
                        <Post />
                    </li>
                    <li>
                        <Post />
                    </li>
                    <li>
                        <Post />
                    </li>
                </ul>
            </div>
            <div className='profile'>
                <ul>
                    <li>
                        <img className='profile-pic' src={process.env.PUBLIC_URL + '/profile.png'} />
                    </li>
                    <li className='profile-name'>
                        name
                    </li>
                    <li className='prfile-fav-res'>
                        ❤️ favourite resturant
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default MaigPage;