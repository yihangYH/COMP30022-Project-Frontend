import React , { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from './header';
import '../css/login.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
        <div>
            <Header display='none' />
            <div className='login_content'>
                <ul className='login_content_ul'>
                    <li>
                    <div className='Welcome'>
                        <p>Welcome Back</p>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </Form.Group>
                        <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                        Login
                        </Button>
                    </Form>
                    </li>
                    <li>
                        <img  className="login_img" src={process.env.PUBLIC_URL + '/background.png'} />
                    </li>

                </ul>
            </div>

        </div>
    );
}