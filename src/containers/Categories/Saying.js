import React, { useEffect, useState } from 'react';
import axiosQuote from '../../axiosQuote';

const Saying = () => {
  const [saying, setSaying] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosQuote.get(
        '/quotes.json?orderBy="category"&equalTo="saying"');
      const arr = [];
      for (let key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          arr.push({
            ...response.data[key],
            id: key,
          });
        }
      }
      setSaying(arr);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <h1>Saying</h1>
      {saying.map(quote => {
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

export default Saying;