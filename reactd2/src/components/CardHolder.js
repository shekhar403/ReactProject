import React from 'react'
import CustomCard from './Card';
import  {books} from '../data/DataValues'

function CustomCards() {
  return (
    <div className='d-flex flex-row  justify-content-between flex-wrap'>

        {books.map((book) => {
            console.log(book);
            return <CustomCard image={book.image} title={book.title} description={book.description} lastUpdated={book.lastUpdatedInMinutes} />
        })}
    </div>
  )
}

export default CustomCards
