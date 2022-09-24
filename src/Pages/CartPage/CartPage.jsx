import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';
import Header from '../../Components/Headers/Header';
import CartService from '../../Services/CastService';

const cartService = new CartService();

function CartPage(props) {

    const navigate = useNavigate();
    const [cartArray, setcartArray] = useState([])

    const goToDashBoard = () => {
        navigate('/dashboard')
    }

    useEffect(() => {
        getCartList();
      }, [])

    const getCartList = () => {
        cartService.getAllBooksFromCart()
          .then((response) => {
            console.log(response.data);
            setcartArray(response.data.Cart)
          }).catch((err) => {
            console.log(err);
          })
      }

    return (
        <div>
             <Header />
      {/* <span onClick={goToDashBoard} className='homecart'>Home / Cart</span> */}
      
        {cartArray.length > 0 && cartArray.map((cart, index) => (
          <Cart key={index} arrayCart={cart} getcart={getCartList} />

        ))}

        {/* <Mycart /> */}
     


    </div>
    );
}

export default CartPage;