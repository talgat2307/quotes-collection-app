import React, { useEffect, useState } from 'react';
import axiosQuote from '../../axiosQuote';
import { Link } from 'react-router-dom';

const Home = props => {
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosQuote.get('/quotes.json');
      const arr = [];
      for (let key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          arr.push({
            ...response.data[key],
            id: key,
          });
        }
      }
      setAllQuotes(arr);
    };

    fetchData().catch(console.error);

  }, []);

  const handleDeleteQuote = async (id) => {
    try {
      await axiosQuote.delete('/quotes/' + id + '.json');
    } finally {
      setAllQuotes(allQuotes.filter(quote => quote.id !== id));
    }
  };

  return (
    <div className='home'>
      <h1>All</h1>
      {allQuotes.map(quote => {
        return (
          <div className='quote'>
            <div>
              <h3>{quote.category}</h3>
              <p>"{quote.text}"</p>
              <p>- {quote.author}</p>
            </div>
            <div className='btn'>
              <button><Link to={`/quotes/${quote.id}/edit`}>Edit</Link></button>
              <button onClick={() => handleDeleteQuote(quote.id)}>X</button>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Home;