import React from 'react';
import '../css/header.css';
function Header(props){
    return(
        <div className='header'>
            <div>logo</div>
            <div>
                <button id = "btn" className='login'>{props.btnText}</button>
            </div>
        </div>

    )
}

export default Header;