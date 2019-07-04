import React, { Component } from 'react'


class Book extends Component{
   
    render(){
      const { books, change }  = this.props
        return(
                  <li >
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${books.imageLinks? books.imageLinks.thumbnail : ""})`}}></div>
                      <div className="book-shelf-changer">
                        <select value = {books.shelf || 'none'} onChange={event => change(books, event.target.value)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{books.title}</div>
                    <div className="book-authors">{books.authors}</div>
                  </div>
                  </li> 
        )
    }
}

export default Book