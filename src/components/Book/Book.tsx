import { BookModel } from "../../models/Books";
import './book.styles.css';

interface BookProps{
    book: BookModel;
}

const Book = (book: BookProps) => {
    const { title, desc, image } = book.book;
    return (
        <div className='book-container'>
            <img
                alt={`book ${title}`}
                src={image}
            />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
}
export default Book;