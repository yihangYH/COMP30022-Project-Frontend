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
                                    🍽️ 
                                    <span className='name_text'>Black Angus Steakhouse</span>
                                </li>
                                <li className='res_location'>
                                    📍
                                    <span className='location_text'>4517 Washington Ave. Manchester, Kentucky 39495</span>
                                </li>
                            </ul>
                        </div>
                        <div className='time'>
                            <p>23/08/2022</p>
                        </div>
                    </li>
                    <li className='food_pic_in_post'>
                        <img className='pic' src={process.env.PUBLIC_URL + '/test.png'} />
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Post;