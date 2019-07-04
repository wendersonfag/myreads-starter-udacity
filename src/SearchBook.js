import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book';


class SearchBook extends Component {
    state = {
      query: '',
      searchBooks: []
    }
    //atualiza a query
    updateQuery = (query) => {
      this.setState({ query: query})
      this.updateSearch(query)
  }
    //faz busca dos books
    updateSearch = (query) => {
      if(query){
        BooksAPI.search(query).then((searchBooks) =>{
          if(searchBooks.error){
            this.setState({searchBooks: []})
          }else{
            this.setState({ searchBooks: searchBooks})
            console.log(searchBooks)
          }
        })
      }else{
        this.setState({searchBooks: []})
      }
     
  }
    render(){
      const { query } = this.state
      const{ change } = this.props  
      
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search">Close</button></Link>
              <div className="search-books-input-wrapper">
                  <input 
                  type="text" 
                  placeholder="Search by title or author"  
                  value={query} 
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchBooks.map(search => {
                  this.props.books.map(book =>(
                    book.id === search.id ? search.shelf = book.shelf : ''
                  ))
                  return(
                    (
                      <li key={search.id}>
                        
                        <Book books = {search}  change = {change} />
                      </li> 
                    )
                  )
                })}
                 
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBook