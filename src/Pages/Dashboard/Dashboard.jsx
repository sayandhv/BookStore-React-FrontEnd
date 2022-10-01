import React, { useEffect, useState } from 'react';
import BookService from '../../Services/BooksServices';
import Header from '../../Components/Headers/Header';
import DisplayBooks from '../../Components/DisplayBooks/DisplayBooks'
import './DashBoard.css'
import GetBookByid from '../GetBookByid/GetBookByid';
import { Pagination } from '@mui/material';
import usePagination from '../../Components/Pagination/Pagination';


const bookService = new BookService();
function Dashboard(props) {
    
    const [page, setpage] = useState(1);
    
    const [bookArray, setBookArray] = useState([]);

    const [view, SetView] = useState(true);

    const [selectedBook, setSelectedBook] = useState("");

    const [search, setSearch] = useState("");


    useEffect(() => {
        getBooks();
    }, [search])

    const getBooks = () => {
        SetView(true)
        bookService.getAllBooks().then((response)=> {
                console.log(response);
                if (search) {

                    let filterBook = response.data.books.filter(books => books.name.includes(search.toLowerCase()))
                    setBookArray(filterBook)
                } else {
                    setBookArray(response.data.books)
                }

        }).catch((error) =>{
            console.log(error);
        })

    }

    const PER_PAGE = 8;
    var bookArrayLength = bookArray ? bookArray.length : 0;
    const pageCount = Math.ceil(bookArrayLength / PER_PAGE)
    const paginate = usePagination(bookArray, PER_PAGE)

    const changePage = (event, page) => {
        setpage(page);
        paginate.jump(page)
    };
const listenToEachBook = (data) => {
        SetView(false)
        setSelectedBook(data);
        console.log(data);
    }

    const searchBook = (value) => {
        setSearch(value)
    }
    return (
        <>
            <Header search={searchBook}></Header>
            
            {view ? <div>
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

                {paginate.currentData() ? paginate.currentData().map((book, index) => (
                <DisplayBooks key={index} arrayBook={book} getBooks={getBooks} listenToEachBook={listenToEachBook} />
            
            )):'No Book Availble'}
        </div>
        </div>
        </div> :<GetBookByid selectedBook={selectedBook} /> }
    
        <div className='pagination'>
                <Pagination count={pageCount} page={page} onChange={changePage} variant="outlined" shape="rounded" />
            </div>

     </>
    );
}

export default Dashboard;
