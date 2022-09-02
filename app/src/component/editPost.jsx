import React , { useEffect } from 'react';
import Header from './header';
import { Edit } from './edit';

function EditPost(){
    useEffect(() => {
        document.title = 'Edit';
    });

 
    return(
        <div>
            <Header btnText="Log out" color="black" backgroundColor="white" border="2px solid black"/>
            <Edit />
        </div>
    )

}

export default EditPost;