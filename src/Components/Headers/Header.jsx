import { AppBar, TextField, Toolbar } from '@mui/material';
import React from 'react';
import educationImg from '../../Images/education.svg'
import './Header.css'
import {  AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';



function Header(props) {

    const navigate = useNavigate();

    const cart = () => {
        navigate ('/myCart')
    }

    return (
        <div>
           <div className='MainBar'>
            <AppBar>
        <Toolbar  style={{backgroundColor:'#a03037',}}>
            <div className='educationImg' style={{marginLeft:160,height:70}}>
            <img 
            className='book_image'
            style={{height:20,marginTop:25}}
            src={educationImg} />           
                </div>
            <div style={{marginLeft:10}}>
            BOOK STORE
            </div>

            <div className='Search' style={{backgroundColor:'white',marginLeft:40}}>
                <TextField
                className='searchBox'
                style={{width:450}}
                size='small'
                label='search'
                >
                
                
                </TextField>
            </div>
            <div className='cartIcon' onClick={cart}>
                    <AiOutlineShoppingCart
                    size="1.5rem"/>
                </div>
            <div className='profileICon' style={{marginLeft:30}}>
                <BsPerson size="1.5rem"/>
            </div>
            
        </Toolbar>
      </AppBar>
        </div> 
        </div>
    );
}

export default Header;