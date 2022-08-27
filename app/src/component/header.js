import React from 'react';
import { Navigate } from 'react-router-dom';
import '../css/header.css';
function Header(props){
    return(
        <div className='header'>
            <div>
                <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>
            <div>
                <button id = "btn" className='login' onClick={event =>  window.location.href='/login'}
                    style = {{display: `${props.display}`}}>{props.btnText}</button>
                </div>
        </div>

    )
}

export default Header;