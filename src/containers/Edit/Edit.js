import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import axiosQuote from '../../axiosQuote';

const Edit = props => {

  const [editedQuote, setEditedQuote] = useState({
    category: '',
    author: '',
    text: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosQuote('/quotes/' + props.match.params.id + '.json');
      setEditedQuote(response.data);
    }

    fetchData().catch(console.error)

  }, [props.match.params.id])

  const handleQuoteChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditedQuote(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addQuote = async (e) => {
    e.preventDefault();
    try {
      await axiosQuote.put('/quotes/' + props.match.params.id +'.json', editedQuote);
    } finally {
      props.history.replace('/');
    }
  };

  return (
    <div>
      <Form
        title={'Edit a quote'}
        authorVal={editedQuote.author}
        textVal={editedQuote.text}
        optionVal={editedQuote.category}
        handleQuoteChange={(e) => handleQuoteChange(e)}
        addQuote={(e) => addQuote(e)}
      />
    </div>
  );
};

export default Edit;