import React, { useState } from "react";
import "./DisplayBooks.css";
 import imageBook from "../../Images/bookimg.png";
// import Header from "../Headers/Header";
import BookService from "../../Services/BooksServices";
import { Route, Routes, useNavigate } from "react-router-dom";
import GetBookByid from "../../Pages/GetBookByid/GetBookByid";
const bookService = new BookService(); 

function DisplayBooks(props) {

  const navigate = useNavigate();


  
  // const getBookById = (data) => {
  //   console.log("props")
  //   let data = {
  //     "id":props.arrayBook.id
  //   }
  //   console.log("GetBookById is calling");
  //   console.log(data);
  //   bookService.getBookById(data).then((response) => {
                    
  //     console.log(response);
      
  //     setBookdata(response.data.book); 
  //     SetView(true);
  //     // navigate('/getBookByid')
  //       }).catch((error) =>{
  //         console.log(error);
  //       })
  //   props.listenToEachBook(data);
     
  // }

 const bookDetail = (data) => {
    // props.listenToBooks(true);
    props.listenToEachBook(data);
}

  return (

    <>
    <div className="align_books">
      <div className="outsideBookbox " >
    <div className="book_box" onClick={() => bookDetail(props.arrayBook)}>
      <div>
        <div className="book_part">
          <div className="booksImage">
            <img src={imageBook} alt="" className="book-image" />
          </div>
        </div>
        <div className="Bottom_part">
          <div className="texts" >
          <div className="book_name">{props.arrayBook.name}</div>
          <div className="author_name">{props.arrayBook.author}</div>
          <div>
            <span className="rating_part">
                         4.5
              <span className="number_part">(20)</span>
              
            </span>
            <div className="booksPrice">Rs.{props.arrayBook.price}</div>
            {/* <span className='quantity'>({props.arrayBook.quantity})</span> */}
            </div>
          </div>
        </div>
      </div>      
    </div>
    </div>
    </div>
       
  
  </>
);
}

export default DisplayBooks;
