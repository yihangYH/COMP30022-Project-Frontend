import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/home';
import Comment from './component/comment';
import MainPage from './component/mainPage';
import Login from './component/login';
import CreatePost from './component/createPost';
import Register from './component/register'
import EditPost from './component/editPost'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/mainpage/:id' element={< MainPage />}></Route>
            <Route exact path='/comment/:userId/:postId' element={< Comment />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/createpost/:userId' element={< CreatePost />}></Route>
            <Route exact path='/register' element={< Register />}></Route>
            <Route exact path='/editpost/:userId/:postId' element={< EditPost />}></Route>
        </Routes>
    </Router>
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
);


