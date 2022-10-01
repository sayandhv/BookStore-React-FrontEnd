import { AppBar, Menu, MenuItem, TextField, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import educationImg from '../../Images/education.svg'
import './Header.css'
import {  AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';



function Header(props) {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const goToWishlist = () => {
        navigate('/wishlist')
    }

    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    const cart = () => {
        navigate ('/myCart')
    }
    const searching = (event) => {
        props.search(event.target.value)
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
                placeholder='search'
                onChange={searching}
                >
                
                
                </TextField>
            </div>
            <div className='cartIcon' onClick={cart}>
                    <AiOutlineShoppingCart
                    size="2rem"/>
                </div>
                <div className="person" style={{width:50,marginLeft:75,marginTop:20}} >
          < BsPerson  size="2rem" color='white' />
            
             {/* </div>
             <div className="person">
                    <BsPerson size="2rem" style={{ color: '#FFFFFF' }} /> */}
                    <span
                        className="profile-name"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >Sayandh</span>
                    <Menu
                        id="basic-menu"

                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        <MenuItem onClick={goToWishlist}>
                            <FavoriteIcon>
                            </FavoriteIcon>
                            <span className='MyWishlist'>My Wishlist</span>
                        </MenuItem>
                        <MenuItem className='Logout'>
                            <span onClick={logout} className='Logout'>Logout</span>
                        </MenuItem>

                    </Menu>
              </div>
            
        </Toolbar>
      </AppBar>
        </div> 
        </div>
    );
}

export default Header;