import React from "react";
import { BookModel, BooksModel } from "../../models/Books";
import Book from "../Book/Book";
import './booklist.styles.css';

const BookList = ({books} : BooksModel) => (
  <div className="book-list">
  {
    books.map((book: BookModel) => {
        return <Book key={book.isbn13} book={book} />
      })
  }
  </div>
)
export default BookList;
