import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import QuotesPage from './pages/QuotesPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><a href="/">Books</a></li>
          <li><a href="/quotes">Quotes</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
