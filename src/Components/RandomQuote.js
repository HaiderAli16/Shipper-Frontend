import React, { useState } from 'react';
import { GetSingleQuoteUrl } from '../Contants/Constants';
import Navigation from './Navigation';

function RandomQuote() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch(
          GetSingleQuoteUrl
      );
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <><Navigation/>
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <button
        style={{
          marginTop:20,
        padding: '10px',
        backgroundColor: '#2196f3',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        marginBottom:20,
        cursor: 'pointer',
      }}
        onClick={fetchQuote}
      >
        GetRandomQuote
      </button>
      {quote && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p>
            <strong>Author:</strong> {quote.author}
          </p>
          <p>
            <strong>Content:</strong> {quote.content}
          </p>
          <p>
            <strong>Tags:</strong> {quote.tags.join(', ')}
          </p>
          <p>
            <strong>AuthorSlug:</strong> {quote.authorSlug}
          </p>
          <p>
            <strong>Length:</strong> {quote.length}
          </p>
          <p>
            <strong>Date Added:</strong> {quote.dateAdded}
          </p>
          <p>
            <strong>Date Modified:</strong> {quote.dateModifieda}
          </p>
        </div>
      )}
    </div>
    </>
  );
}

export default RandomQuote;
