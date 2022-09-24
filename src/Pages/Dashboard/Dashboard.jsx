import React, { useEffect, useState } from 'react';
import BookService from '../../Services/BooksServices';
import Header from '../../Components/Headers/Header';
import DisplayBooks from '../../Components/DisplayBooks/DisplayBooks'
import './DashBoard.css'


const bookService = new BookService();
function Dashboard(props) {
    const [bookArray, setBookArray] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = () => {
        bookService.getAllBooks().then((response)=> {
                console.log(response);
                setBookArray(response.data.books)
        }).catch((error) =>{
            console.log(error);
        })

    }

    return (
        <>
            <Header></Header>
            <div className='Heading'>
                <span className='booksheading'>Books({bookArray.length})</span>

                <select className='ops' style={{marginLeft:950}}>
                    <option>Sort by relevance</option>
                    <option>Price:Low to High</option>
                    <option>Price:High to Low</option>
                    <option>Newest Arrivals</option>
                </select>
            </div>

            <div className='bookscontainer1' >
             
                <div className='getbooks' >

            {bookArray.length>0 && bookArray.map((book,index)=> (
                <DisplayBooks key={index} arrayBook={book} getBooks={getBooks} />
            
            ))}
        </div>
        </div>
     </>
    );
}

export default Dashboard;
