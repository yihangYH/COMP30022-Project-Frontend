import React from 'react';
import Header from './header';
import '../css/mainPage.css'
import Post from './post';
function MaigPage(props){
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
                        picture
                    </li>
                    <li>
                        name
                    </li>
                    <li>
                        favourite resturant
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default MaigPage;