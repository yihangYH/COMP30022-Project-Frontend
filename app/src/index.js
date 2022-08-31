import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/home';
import MaigPage from './component/mainPage';
import Comment from './component/comment';
import CreatePost from './component/createPost';
import Register from './component/register'
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
            <Route exact path='/mainpage/:id' element={< MaigPage />}></Route>
            <Route exact path='/comment/:userId/:postId' element={< Comment />}></Route>
            <Route exact path='/createpost/:userId/:postId' element={< CreatePost />}></Route>
            <Route exact path='/register' element={< Register />}></Route>
        </Routes>
    </Router>
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
);


