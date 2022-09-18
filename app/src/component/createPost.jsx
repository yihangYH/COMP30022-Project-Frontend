import React , { useEffect, useState } from 'react';
import Header from './header';
import { Create } from './create';
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
    display: "block",
    margin: "0 auto",
    top: "50%",
};


function CreatePost(){
    useEffect(() => {
        document.title = 'Create';
    });
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    let[cssStyle, setCssStyle] = useState();
    const style = {
        zIndex:"9999",
        display:"grid", 
        width:"100%" ,
        height:"100%",
        position:"absolute", 
        backgroundColor:"rgba(0,0,0,-1)"
    }

 
    return(
        <div style={{display:"block", position:"absolute", width:"100%", height:"250%"}}>
            <div style={cssStyle}>            
                <PacmanLoader loading={loading} color="#FF7539" cssOverride={override} size={50} />
            </div>
            <Header btnText="Log out" color="black" backgroundColor="white" border="2px solid black" setCssStyle={setCssStyle} setLoading={setLoading} cssStyle={style}/>
            <Create />
        </div>
    )

}

export default CreatePost;