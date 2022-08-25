import React from 'react';
import '../css/food.css'
function Food(props){
    return(
        <div className='food_element'>
            <ul className='food_element_li'>
                <li>
                    <div>
                        <img className='food_pic_comment' src={process.env.PUBLIC_URL + '/test.png'} />
                    </div>
                </li>
                <li className='food_description_li'>
                    <div className='food_description'>
                        <ul>
                            <li className='food_name'>Hamburger
                                <span className='rating_text'>
                                    Rating: 
                                </span>
                                <span className='rating_value_food'>
                                        4.2
                                </span>
                            </li>
                            <li className='food_description_text'>
                                <p>
                                    Lorem lpsum gum baork jina sikoa dita bhe ioen . Amet minim mollit non deserunt ullamco est sit aliqua 
                                    dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                                    nostrud amet.k jina sikoa dita bhe iamet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            
        </div>

    )
}

export default Food;