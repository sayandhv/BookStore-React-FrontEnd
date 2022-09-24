import { Button, TextField } from '@mui/material';
import React from 'react';
import './Login.css'
import UserService from '../../Services/UserService';
import { useNavigate } from 'react-router-dom';

const userservice = new UserService();

function Login(props) {

    const navigate = useNavigate();
    
    const [text, setText] = React.useState({
        email: '',
        password: '',
        emailError: false,
        passwordError: false,
    })

    const validation = () => {
        let isError = false;
        const error = text;
        error.emailError = text.email === '' ? true : false;
        error.passwordError = text.password === '' ? true : false;

        setText({
            ...error
        })

        isError = error.emailError || error.passwordError
        return isError;
    }

    const next = () => {
        let isValidated = validation();
        let data = {
            'email': text.email,
            'password': text.password,
        }
        if(!isValidated){
            console.log(data);
            userservice.login(data)
            .then((response) => {
                localStorage.setItem("token",response.data.token);
                console.log(response);
                navigate('/dashboard');


            }).catch((error) => {
                console.log(error);
            })
        }
    }


    const changeState = (event) => {
        setText(previousValue => {
            return { ...previousValue, [event.target.name]: event.target.value }

        })
    }

    return (
        <div className="loginContainer">
            <div className='emailPassword'>
                <TextField id="outlined-basic"
                    label="email"
                    variant="outlined"
                    size='small'
                    name='email'
                    error={text.passwordError}
                    helperText={text.passwordError === true ? 'Password is required' : ' '}
                    onChange={(e) => changeState(e)}
                />
                <TextField id="outlined-basic"
                    label="password"
                    variant="outlined"
                    size='small'
                    name='password'
                    error={text.passwordError}
                    helperText={text.passwordError === true ? 'Password is required' : ' '}
                    onChange={(e) => changeState(e)}
                />
            </div>
            <div className='forgetPassword' style={{ paddingLeft: 260,marginTop:-10 }}>
            <a className='forgetlink' href='http://localhost:3000/forgotpassword'>Forgot password?</a>
            </div>
            <div className='login_Btn'>
                <Button
                    className='loginBtn'

                ><div className='loginText'
                    onClick={next}>Login</div>
                </Button>
            </div>
            <div className="or">
                OR
            </div>
            <div className="otherBtn">
                <Button variant="contained"
                    className='facebook'>
                    Facebook</Button>
                <Button variant="outlined"
                >
                    Google
                </Button>
            </div>
        </div>
    );
}


export default Login;