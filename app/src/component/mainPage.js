import React from 'react';
import Header from './header';
import '../css/mainPage.css'
import Post from './post';
function MaigPage(props){
    return(
        <div>
            <Header btnText="Log out" />
            <div className='main_content'>
                <button>Create new</button>
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
        </div>

    )
}

export default MaigPage;