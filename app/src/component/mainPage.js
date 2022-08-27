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
            <div className='main_content'>
                <button className='create_new'>Create new</button>
            </div>
            <div className='post_list'>
                <ul className='main_page_ul'>
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
                        <img className='profile_pic' src={process.env.PUBLIC_URL + '/profile.png'} />
                    </li>
                    <li className='profile_name'>
                        name
                    </li>
                    <li className='prfile_fav_res'>
                        ❤️ favourite resturant
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default MaigPage;