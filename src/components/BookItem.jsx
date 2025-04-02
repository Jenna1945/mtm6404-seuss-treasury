const BookItem = ({ book }) => {
    return (
      <div>
        <img
          src={book.image}
          alt={book.title}
          style={{ width: '150px', height: 'auto' }} // Adjust width and auto height to maintain aspect ratio
        />
        <h2>{book.title}</h2>
      </div>
    );
  };
  
  export default BookItem;
  
  