import React from 'react';
import '../css/header.css';
function Header(props){

    console.log(props.isShared)
    const sharedStyle = {
        display:""
    }
    if(props.isShared){
        sharedStyle.display = "none"
    }

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
            <div style={sharedStyle}>
                <button id = "btn" className='login' onClick={btnClicked}
                    style = {{zIndex:"9999",display: `${props.display}`, color:`${props.color}`, backgroundColor:`${props.backgroundColor}`, border:`${props.border}`}} >{props.btnText}</button>
            </div>
        </div>

    )
}

export default Header;