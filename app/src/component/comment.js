import React , { useEffect } from 'react';
import Header from './header';
import '../css/comment.css'
import Food from './food';
function Comment(props){
    useEffect(() => {
        document.title = 'Post';
    })
    return(
        <div>
            <Header btnText="Log out" />
            <div className='button'>
                <button className='back'>Back</button>
                <button className='edit'>Edit</button>
            </div>
            <div className='detail'>
                <ul className='detail_list'>
                    <li className='title'>
                        <p>The unseen of spending three years at Pixelgrade</p>
                    </li>
                    <li >
                        <p className='infor'>Rating: 
                        <span className='rate_value'>3.8</span>
                        <span className='rest_name'>
                            <img className='food_pic' src={process.env.PUBLIC_URL + '/food.png'} />
                            <span className='infor_rest_name'>Uno Chicago Grill</span>
                        </span>
                        <span className='rest_location'>
                            <img className='location_pic' src={process.env.PUBLIC_URL + '/location.png'} />
                            <span className='infor_location'>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
                        </span>
                        </p>
                    </li>
                    <li>
                        <img className='main_pic' src={process.env.PUBLIC_URL + '/test1.png'} />
                    </li>
                    <li>
                        <p className='description'>
                        Lorem lpsum gum baork jina sikoa dita bhe ioen . Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam 
                        consequat sunt nostrud amet.k jina sikoa dita bhe iamet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                        veniam consequat sunt nostrud amet.Lorem lpsum gum baork jina sikoa dita bhe ioen . Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.k jina sikoa dita bhe iamet minim mollit non deserunt ullamco est sit aliqua 
                        dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Lorem lpsum gum baork jina sikoa dita bhe ioen . 
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.k 
                        jina sikoa dita bhe iamet minim 
                        mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </li>
                    <li>
                        <div className='food_element_comment'>
                            <ul>
                                <li>
                                    <Food />
                                </li>
                                <li>
                                    <Food />
                                </li>
                                <li>
                                    <Food />
                                </li>
                                <li>
                                    <Food />
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Comment;