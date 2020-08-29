import React, { useState } from 'react';
import Form from '../../components/Form';
import axiosQuote from '../../axiosQuote';

const Add = props => {

  const [quotes, setQuotes] = useState({
    category: '',
    author: '',
    text: '',
  });

  const handleQuoteChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuotes(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addQuote = async (e) => {
    e.preventDefault();
    try {
      await axiosQuote.post('/quotes.json', quotes);
    } finally {
      props.history.replace('/');
    }
  };

  return (
    <div>
      <Form
        title={'Submit new quote'}
        authorVal={quotes.author}
        textVal={quotes.text}
        optionVal={'Choose category'}
        handleQuoteChange={(e) => handleQuoteChange(e)}
        addQuote={(e) => addQuote(e)}
      />
    </div>
  );
};

export default Add;