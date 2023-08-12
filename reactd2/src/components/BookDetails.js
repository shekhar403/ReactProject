import React from 'react'
import "../styles/bookdetails.css"
import { useParams } from 'react-router-dom'
import { books } from '../data/DataValues'

function BookDetails() {
    let bookName = useParams().id;
    let book = books.find((book) => (book.title === bookName));

    return (
        <div className='text-center'>
            <img src={book.image} alt='book image' />
            <h1 className='horror_text text-white'>{book.title}</h1>
            <h3 className='horror_text text-white'>{book.description}</h3>
            <h3 className='horror_text text-white'>{`updated ${book.lastUpdatedInMinutes} mins ago`}</h3>
        </div>
    )
}

export default BookDetails