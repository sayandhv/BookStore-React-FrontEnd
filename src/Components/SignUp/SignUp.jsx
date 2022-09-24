import { Button, TextField } from '@mui/material';
import './SignUp.css'
import React from 'react';

import UserService from '../../Services/UserService';

const userservice = new UserService(); 

function SignUp(props) {

    const [text,setText] = React.useState({
        role:'',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirm:'',
        MobileNumber:'',
        firstNameError:false,
        lastNameError:false,
        emailError:false,
        passwordError:false,
        MobileNumberError:false
    })

    const validation = () => {
        let isError = false;
        const error = text;
        error.firstNameError = text.firstName === '' ? true : false;
        error.lastNameError = text.lastName === '' ? true : false;
        error.MobileNumberError = text.MobileNumber === '' ? true : false;
        error.emailError = text.email === '' ? true : false;
        error.passwordError = text.password === '' ? true : false;
  
        setText({
          ...error
        })
  
        isError = error.firstNameError || error.lastNameError || error.MobileNumberError || error.emailError || error.passwordError 
        return isError;  
      }
      
      const next = () => {
        let isValidated = validation();
        let data = {
            'role':text.role,
            'first_name':text.firstName,
            'last_name':text.lastName,
            'email':text.email,
            'phone_no':text.MobileNumber,
            'password':text.password,
            'confirm_password':text.confirm
        }

        if (!isValidated) {
            console.log(data);
            userservice.signUp(data)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
      }

    const changeState = (event) => {
        setText(previousValue => {
          return {...previousValue,[event.target.name]:event.target.value}
  
        })
      }

    return (
       <div className="mainContainer">
            <div className="signUpContainer2">
            <div className='fields'>
                        <div className='role_part'>
                        <TextField
                        style={{width:298}}
                        id="outlined_basic"
                        className='role'
                        name='role'
                        label="Role"
                        variant='outlined'
                        size="small"
                        error={text.passwordError}
                        helperText={text.passwordError===true ? 'Password is required':' '}
                        onChange={(e) => changeState(e)}
                        />
                        </div>
                        <div className='firstName'>
                        <TextField
                            style={{width:298}}
                            id="outlined-basic"
                            label="firstName"
                            variant="outlined"
                            size="small"
                            name='firstName'
                            error={text.firstNameError}
                            helperText={text.firstNameError===true ? 'FirstName is required':' '}
                            onChange={(e) => changeState(e)}
                        />
                        </div>
                    <div className="last_name_SignUp">
                        <TextField
                             style={{width:298}}
                            id="outlined-basic"
                            label="lastName"
                            variant="outlined"
                            size="small"
                            name='lastName'
                            error={text.lastNameError}
                            helperText={text.lastNameError===true ? 'Last Name is required':' '}
                            onChange={(e) => changeState(e)}

                        />
                    </div>
                    <div className="emailSignUp">
                        <TextField
                            style={{width:298}} 
                            id="outlined-basic"
                            label="email"
                            variant="outlined"
                            size="small"
                            name="email"
                            error={text.emailError}
                            helperText={text.emailError===true ? 'Email is required':' '}
                            onChange={(e) => changeState(e)}

                        />
                    </div>
                    <div className="passwordSignUp">
                        <TextField
                            style={{width:298}}
                            id="outlined-basic"
                            label="password"
                            variant="outlined"
                            size="small"
                            name='password'
                            error={text.passwordError}
                            helperText={text.passwordError===true ? 'Password is required':' '}
                            onChange={(e) => changeState(e)}

                        />                      
                    </div>
                    <div className='confirm'>
                         <TextField
                            style={{width:298}}
                            id="outlined_basic"
                            className='role'
                            name='confirm'
                            label="confirmPassword"
                            variant='outlined'
                            size="small"
                            error={text.passwordError}
                            helperText={text.passwordError===true ? 'Password is required':' '}
                            onChange={(e) => changeState(e)}
                            />
                            </div>
                    <div className="MobileNumberSignUp">
                        <TextField
                            style={{width:298}}
                            id="outlined-basic"
                            label="MobileNumber"
                            variant="outlined"
                            size="small"
                            name='MobileNumber'
                            error={text.MobileNumberError}
                            helperText={text.MobileNumberError===true ? 'Mobile Number is required':' '}
                            onChange={(e) => changeState(e)}

                        />
                    </div>

                </div>

                <div className="signUpBtn">
                    <Button 
                     className='signup_btn'>
                        <div style={{color:'white'}}
                          onClick={next}> SignUp</div>
                        </Button> 
                </div>
            </div>
        </div>

    );
}

export default SignUp;