import React from 'react';
import '../css/post.css'
function Post(props){
    return(
        <div>
            <div className='post_content'>
                <ul className='content_pic'>
                    <li>
                        <div className='post_title'>
                            <ul className='list'>
                                <li className='li_title'><p>Where to grow your business as a photographer: site or social media?</p></li>
                                <li className='li_rating'>
                                    Rating:
                                </li>
                                <li className='li_rating_value'>
                                    3.8
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='res_name'>
                                    <img className='name_pic' src={process.env.PUBLIC_URL + '/name.png'} />
                                    <div className='name_text'>asdaa</div>
                                </li>
                                <li className='res_location'>
                                <img className='location_pic' src={process.env.PUBLIC_URL + '/location.png'} />
                                asdassa</li>
                            </ul>
                        </div>
                        <div className='time'>
                            <p>23/08/2022</p>
                        </div>
                    </li>
                    <li>
                        <img className='pic' src={process.env.PUBLIC_URL + '/test.png'} />
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Post;