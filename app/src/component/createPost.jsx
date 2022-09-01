import React , { useEffect } from 'react';
import Header from './header';
import { Create } from './create';

function CreatePost(){
    useEffect(() => {
        document.title = 'Create';
    });

 
    return(
        <div>
            <Header btnText="Log out" color="black" backgroundColor="white" border="2px solid black"/>
            <Create />
        </div>
    )

}

export default CreatePost;