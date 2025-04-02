import { useEffect, useState } from 'react';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch('https://seussology.info/api/quotes');
      const data = await response.json();
      setQuotes(data.slice(0, 10));  // Only get the first 10 quotes
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>Random Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesPage;
