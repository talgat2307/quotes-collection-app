import React, { useEffect, useState } from 'react';
import axiosQuote from '../../axiosQuote';

const FamousPeople = () => {
  const [famousPeople, setFamousPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosQuote.get(
        '/quotes.json?orderBy="category"&equalTo="famous-people"');
      const arr = [];
      for (let key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          arr.push({
            ...response.data[key],
            id: key,
          });
        }
      }
      setFamousPeople(arr);
    };

    fetchData().catch(console.error);

  }, []);


  return (
    <div>
      <h1>Famous People</h1>
      {famousPeople.map(quote => {
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

export default FamousPeople;