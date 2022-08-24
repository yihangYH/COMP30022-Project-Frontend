import React from 'react';
import '../css/header.css';
function Header(props){
    return(
        <div className='header'>
            <div>
                <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>
            <div>
                <button id = "btn" className='login'>{props.btnText}</button>
            </div>
        </div>

    )
}

export default Header;