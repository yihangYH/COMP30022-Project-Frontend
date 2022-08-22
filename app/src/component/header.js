import React from 'react';
import '../css/header.css';
function Header(){
    return(
        <div className='header'>
            <div>logo</div>
            <div>
                <button className='login'>Log in</button>
            </div>
        </div>

    )
}

export default Header;