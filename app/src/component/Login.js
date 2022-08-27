import React , { useEffect } from 'react';
import Header from './header';
function Login(){
    return (
        <div>
            <Header />
            <form>
                <div class="login">
                    <input type="text" placeholder="Enter Username" name="username" required> </input>
                    <input type="text" placeholder="Enter Username" name="username" required> </input>
                    <button type="submit">Login</button>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
        
    )
}

export default Login;