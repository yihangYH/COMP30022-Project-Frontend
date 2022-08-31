import React , { useEffect } from 'react';
import Header from './header';
import { Create } from './create';

function CreatePost(){
    useEffect(() => {
        document.title = 'Create';
    });

 
    return(
        <div>
            <Header btnText="Log in"/>
            <Create />
        </div>
    )

}

export default CreatePost;