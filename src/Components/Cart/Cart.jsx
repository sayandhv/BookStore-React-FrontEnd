import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import imageBook from "../../Images/bookimg.png";
import "./Cart.css";
import Header from '../../Components/Headers/Header';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import CartService from '../../Services/CastService';
import OrderService from '../../Services/OrderService';
import { useNavigate } from 'react-router-dom';

const cartService = new CartService();
const orderService = new OrderService

function Cart(props) {

    const navigate = useNavigate();

    const [customerDetails, setCustomerDetails] = useState(false);

    const [orderSummery, setOrderSummery] = useState(false)

    const ordersummeryOpen = () => {
        setOrderSummery(true);
    }

    const customerDetailsOpen = () => {
        setCustomerDetails(true);
    }

    const increment = (props) => {
        let data = {
            'id': props.arrayCart.id

        }
        console.log('increment calling', data);
        cartService.incrementCartQuanitity(data)
            .then((res) => {
                console.log(res);
                props.getcart();

            }).catch((err) => {
                console.log(err);
            })
    }

    const decrement = (props) => {
        let data = {

            'id': props.arrayCart.id
        }

        cartService.decrementCartQuanitity(data)
            .then((res) => {
                console.log(res);
                props.getcart();

            }).catch((err) => {
                console.log(err);
            })

    }

    const removeCart = (props) => {
        console.log(props.arrayCart.id)
        let data = {

            'id': props.arrayCart.id
        }
        cartService.deleteBookFromCart(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
    }

    const checkout = (props) => {
        console.log(props.id)
        let data = {

            'address_id': 8,
            'name': props.arrayCart.name,
            'quantity': props.arrayCart.book_quantity
        }
        orderService.placeOrder(data)
            .then((res) => {
                console.log(res)
                navigate('/success')

            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        props.getcart()
    }, [])

    return (
        <div>
            <div className='header_controller'>
                <Header></Header>
                <div className='cartcontainer'>
                    <div className="cart-heading">
                        <span className='mycartheading'>Mycart</span>

                        <div className='location'><LocationOnOutlinedIcon className='locationicon' />
                            <button className='locationbutton' >Use Current Location</button></div>
                    </div>

                    <div className='cartDetails'>
                        <img className='cartimage' src={imageBook}></img>
                        <div className='bookdetails'>
                            <span className='bookname'> {props.arrayCart.name} </span>
                            <span className='author'>by stephen</span>
                            <span className='price'> Rs.1500</span>
                        </div>


                    </div>


                    <div className='cartQuantity'>
                        <RemoveCircleOutlineRoundedIcon decrement className='add' onClick={() => decrement(props)} />
                        <span className='cartnumber'> {props.arrayCart.book_quantity} </span>
                        <AddCircleOutlineRoundedIcon increment className='add' onClick={() => increment(props)} />

                        <span onClick={() => removeCart(props)} >Remove</span>
                    </div>

                    <div className="placeorderbutton">
                        <Button
                            onClick={customerDetailsOpen}
                            style={{
                                width: '150px',
                                height: '35px',
                                backgroundColor: '#3371B5',
                                color: '#FFFFFF',
                                fontSize: '13px',

                            }}>PLACE ORDER</Button>
                    </div>

                </div>
            </div>
            {customerDetails ? <CustomerDetails />
                : <div className='addressPlace' onClick={customerDetailsOpen} >
                    <span style={{ marginLeft: -600 }}>AddressDetails</span></div>}
        
                    
                    
                    {orderSummery ? <div className='ordercontainer'>
            <div >
                <span className='addressbuttons'>Order Summary</span>
            </div>


            <div className='cartDetails'>
                <img className='cartimage' src={imageBook}></img>
                <div className='bookdetails'>
                    <span className='bookname'>{props.arrayCart.name}</span>
                    <span className='author'>{props.arrayCart.author}</span>
                    <span className='price'> {props.arrayCart.Price}</span>
                </div>


            </div>



            <div className="continuebutton"  >
                <Button className="continuebutton" onClick={() => checkout(props)} style={{
                    width: '150px',
                    height: '35px',
                    backgroundColor: '#3371B5',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    marginTop: '5px',

                }}>CHECKOUT</Button>
            </div>
        </div>
                : <div onClick={ordersummeryOpen} className='orderPlace'>
                
                <span style={{ marginLeft: -600 }}>OrderSummery</span>
                </div>}

            </div>

    );
}

export default Cart;