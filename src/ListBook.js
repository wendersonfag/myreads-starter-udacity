import React, { Component } from 'react'
import ShelfBook from './ShelfBook'
import ButtonAdd from './ButtonAdd'
import PropTypes from 'prop-types'

class ListBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        change: PropTypes.func.isRequired
    }

  
 
    render(){
       const { books, change } = this.props
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
        const wantToRead = books.filter(book => book.shelf === "wantToRead" )
        const read = books.filter(book => book.shelf === "read" )
        
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <ShelfBook title='Currently Reading' books = {currentlyReading} change={change}/>  
              <ShelfBook title='Want To Read' books = {wantToRead} change={change}/>  
              <ShelfBook title='Read' books = {read}  change={change}/>
            </div>
              <ButtonAdd/>
          </div>
        )
    }
}

export default ListBook