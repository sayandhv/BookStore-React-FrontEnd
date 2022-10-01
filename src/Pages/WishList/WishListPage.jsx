import React, { useEffect, useState } from 'react';
import Header from '../../Components/Headers/Header';
import WishListComponent from '../../Components/WishListComponent/WishListComponent';
import CartService from '../../Services/CastService';

const cartService = new CartService();
function Wishlists(props) {
    const [wishlistArray, setWishlistArray] = useState([])

    useEffect(() => {
        getWishlist();
    }, [])
    const getWishlist = () => {
        console.log("Get All wishlist is calling")
        cartService.getAllBooksFromWishlist()
            .then((res) => {
                console.log(res.data);
                setWishlistArray(res.data.wishlist)
            }).catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <Header/>

            {wishlistArray.length > 0 && wishlistArray.map((wishlist, index) => (
                <WishListComponent key={index} wishlistArray ={wishlist} getwishlist={getWishlist} />
                
            ))}

        </div>
    );
}

export default Wishlists;