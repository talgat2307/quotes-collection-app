import React, { useEffect, useState } from 'react';
import axiosQuote from '../../axiosQuote';

const Motivational = () => {
  const [motivational, setMotivational] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosQuote.get(
        '/quotes.json?orderBy="category"&equalTo="motivational"');
      const arr = [];
      for (let key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          arr.push({
            ...response.data[key],
            id: key,
          });
        }
      }
      setMotivational(arr);
    };

    fetchData().catch(console.error);

  }, []);

  return (
    <div>
      <h1>Motivational</h1>
      {motivational.map(quote => {
        return (
          <div key={quote.id} className='quote'>
            <div>
              <p>"{quote.text}"</p>
              <p>- {quote.author}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Motivational;