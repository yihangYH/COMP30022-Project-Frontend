import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './component/home';
import MaigPage from './component/mainPage';
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
        </Routes>
    </Router>
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
);


