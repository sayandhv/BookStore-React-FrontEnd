import { Button, TextField } from '@mui/material';
import React from 'react';
import Header from '../Headers/Header';
import './ForgetPassword.css' 

import UserService from '../../Services/UserService';

const userservice = new UserService();

function ForgetPassword(props) {

    const [text, setText] = React.useState({
        email: '',
    })

    const next = () => {
        let data = {
            'email': text.email,
        }

        console.log(data);
        userservice.forgetPassword(data)
        .then((response) => {
            console.log(response);


        }).catch((error) => {
            console.log(error);
        })
    }

    const changeState = (event) => {
        setText(previousValue => {
            return { ...previousValue, [event.target.name]: event.target.value }

        })
    }

    

    return (
        <div className='continer'>
            <div className='mainBox'>
            <div className='toolbarContainer'>
                <Header></Header>
            </div>
            <div className='headingTag'><h3>Forgot Your Password?</h3></div>
           
        <div className='box'>
            <div className='textinBox'>
                <span>Enter your email address and we'll send you a link to reset your
              password</span>
            </div>

            <div className='emailBox'>
                <TextField
                size='small'
                label='email'
                name='email'
                onChange={(e) => changeState(e)}
                >
                </TextField>
                <div className='resetBtn'>
                    <Button className='btn' style={{fontSize:10,color:'white'}}
                    onClick={next}>
                        Reset Password
                    </Button>
                </div>
                <div className='createbtn'>
                    <Button style={{marginTop:25,color:'black',fontWeight:520}}
                    href = "http://localhost:3000/">
                        Create Account</Button>
                    
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default ForgetPassword;