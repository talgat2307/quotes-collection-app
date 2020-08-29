import React from 'react';

const Form = props => {
  return (
    <div className='add'>
      <h1>{props.title}</h1>
      <form onSubmit={props.addQuote}>
        <div className='select'>
          <label htmlFor="select">Category</label>
          <select name='category' id='select' onChange={props.handleQuoteChange}>
            <option value='' selected disabled hidden>{props.optionVal}</option>
            <option value="star-wars">Star Wars</option>
            <option value="saying">Saying</option>
            <option value="motivational">Motivational</option>
            <option value="humour">Humour</option>
            <option value="famous-people">Famous People</option>
          </select>
        </div>
        <div className='author'>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id='author'
            name='author'
            value={props.authorVal}
            onChange={props.handleQuoteChange}
          />
        </div>
        <div className='text'>
          <label htmlFor="text">Quote text</label>
          <textarea
            id="text"
            cols="30"
            rows="10"
            name='text'
            value={props.textVal}
            onChange={props.handleQuoteChange}
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Form;