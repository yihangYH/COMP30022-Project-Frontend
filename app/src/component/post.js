import React from 'react';
import '../css/post.css'
function Post(props){
    return(
        <div>
            <div className='post-content'>
                <ul className='content-pic'>
                    <li>
                        <div className='post-title'>
                            <ul className='list'>
                                <li><p>Where to grow your business as a photographer: site or social media?</p></li>
                                <li className='li-rating'>
                                    Rating:
                                </li>
                                <li className='li-rating-value'>
                                    3.8
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='res-name'>
                                    🍽️ 
                                    <span className='name-text'>Black Angus Steakhouse</span>
                                </li>
                                <li className='res-location'>
                                    📍
                                    <span className='location-text'>4517 Washington Ave. Manchester, Kentucky 39495</span>
                                </li>
                            </ul>
                        </div>
                        <div className='time'>
                            <p>23/08/2022</p>
                        </div>
                    </li>
                    <li className='food-pic-in-post'>
                        <img className='pic' src={process.env.PUBLIC_URL + '/test.png'} />
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Post;