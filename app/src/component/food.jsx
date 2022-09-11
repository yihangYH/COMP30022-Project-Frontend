import React from 'react';
import '../css/food.css'
function Food(props){
    return(
        <div className='food-element'>
            <ul className='food-element-li'>
                <li>
                    <div>
                        <img className='food-pic-comment' src={props.data.foodImage} />
                    </div>
                </li>
                <li className='food-description-li'>
                    <div className='food-description'>
                        <ul>
                            <li className='food-name'>{props.data.name}
                                <span className='rating-text'>
                                    Rating: 
                                </span>
                                <span className='rating-value-food'>
                                        {props.data.rate}
                                </span>
                            </li>
                            <li className='food-description-text'>
                                <p>
                                    {props.data.comment}
                                    
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