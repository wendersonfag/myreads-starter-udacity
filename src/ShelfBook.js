import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class ShelfBook extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    change: PropTypes.func.isRequired
}
    render(){
      const { books, change } = this.props
      console.log(books)
      
        return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => <Book books={book} key={book.id} change= {change}/>)}
              </ol>
            </div>
          </div>
            
        )
    }
}

export default ShelfBook