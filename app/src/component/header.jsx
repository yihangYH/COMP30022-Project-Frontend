import React from 'react';
import '../css/header.css';
function Header(props){

    const btnClicked = () => {
        props.setCssStyle(props.cssStyle);
        props.setLoading(true);
        if(props.loginOrlogout === "login"){
            window.location.href = "/login";
        }else{
            localStorage.clear();
            window.location.href = '/';
        }
    }

    return(
        <div className='header'>
            <div>
                <img className='logo' src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>
            <div>
                <button id = "btn" className='login' onClick={btnClicked}
                    style = {{zIndex:"9999",display: `${props.display}`, color:`${props.color}`, backgroundColor:`${props.backgroundColor}`, border:`${props.border}`}} >{props.btnText}</button>
            </div>
        </div>

    )
}

export default Header;