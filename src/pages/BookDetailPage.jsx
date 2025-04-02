import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      const response = await fetch(`https://seussology.info/api/books/${id}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBookDetail();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img
        src={book.image}
        alt={book.title}
        style={{ width: '300px', height: 'auto' }} // Apply consistent size
      />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetailPage;
