import React from 'react';
import { useState, useEffect, ChangeEvent } from "react";
import BookList from "./components/BookList/BookList";
import { getData } from "./utils/data.utils";
import { BookModel, BooksModel } from "./models/Books";
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  
  const [searchField, setSearchField] = useState('');
  const [books, setBooks]= useState<BookModel[]>([]);
  const [filteredBooks, setFilterBooks] = useState(books);
  useEffect(() => {
    const fetchBooks = async () =>{
      const books = await getData<BooksModel>('https://api.itbook.store/1.0/new')
      setBooks(books.books);
    }
    fetchBooks();
  }, []);

  useEffect(() => {
    const newFilteredBooks = books.filter((book) => {
      return book.title.toLocaleLowerCase().includes(searchField);
    });

    setFilterBooks(newFilteredBooks);
  }, [books, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
			<h1> Book List </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search books' />
      <BookList books={filteredBooks} />
		</div>
  );
}

export default App;
