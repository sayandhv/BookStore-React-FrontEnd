import React from 'react';
import './HomePage.css'

 import trolly from '../../Images/trolly.png'
import SignUp from '../../Components/SignUp/SignUp';
//   import SignUp from '../../Components/SignUp/SignUp';
  import Login from '../../Components/Login/Login';
import { Button } from '@mui/material';
// import { fontWeight } from '@mui/system';
// import { useState } from 'react';

 

function HomePage(props) {

        const [atClick, setatClick] = React.useState(true);
     
    const openLogin = () => {
        setatClick(false);
    };

    const openSignup = () => {
        setatClick(true);
    }

    return (
        <div className='Container'>
            <div className='Box'>
                <div className='leftBox'>
                    <div className='trollyImage'>
                        <img src={trolly} alt="" className='image'>                            
                        </img>
                    </div> 
                    <div className='textUnderImage'><h5>ONLINE BOOK SHOPING</h5></div>                  
                </div>
                <div className='RightBox'>
                    <div className='componentContainers'>
                    <div className='buttons'>
                        <div className='loginButton' onClick={openLogin} >
                            <Button style={{fontSize:18,fontWeight:600}}>
                            <div style={{color:'black'}}>LOGIN</div></Button>
                        </div>
                        <div className='signupButton' onClick={openSignup} >
                            <Button style={{fontSize:18,fontWeight:600}}>
                               <div style={{color:'black'}}> SIGNUP</div></Button>
                        </div>
                        </div>
                        <div className='components'>
                        {  atClick ? <SignUp />
                          :<Login></Login>
                        } 
                    </div>
                
                </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;