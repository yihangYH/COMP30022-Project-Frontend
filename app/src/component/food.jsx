import React from 'react';
import '../css/food.css'
function Food(props){
    return(
        <div className='food-element'>
            <ul className='food-element-li'>
                <li>
                    <div>
                        <img className='food-pic-comment' src={process.env.PUBLIC_URL + '/test.png'} />
                    </div>
                </li>
                <li className='food-description-li'>
                    <div className='food-description'>
                        <ul>
                            <li className='food-name'>Hamburger
                                <span className='rating-text'>
                                    Rating: 
                                </span>
                                <span className='rating-value-food'>
                                        4.2
                                </span>
                            </li>
                            <li className='food-description-text'>
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