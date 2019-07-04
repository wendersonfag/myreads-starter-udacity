import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from './ListBook';
import SearchBook from './SearchBook'



class BooksApp extends React.Component {
  state = {
      books: []
      
  }
  //pega todo os books
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) 
      console.log(books)  
    })
  }

  // trocar os books de shelf
  change = (b, shelf) =>{
    BooksAPI.update(b,shelf).then(()=>{
      BooksAPI.getAll().then((books) => {
        this.setState({ books })  
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBook books = {this.state.books}  change={this.change}/>
        )}
        />
        
        <Route path='/search' render={() => (
          <SearchBook books= {this.state.books} change={this.change}/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
