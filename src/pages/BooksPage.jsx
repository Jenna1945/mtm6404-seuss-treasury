import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../components/BookItem';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://seussology.info/api/books');
      const data = await response.json();
      setBooks(data);
    };
    
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.map(book => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <BookItem book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
