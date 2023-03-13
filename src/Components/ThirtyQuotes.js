import React, { useState } from 'react';
import Navigation from './Navigation';

function Quote({ author, content, tags }) {
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            backgroundColor: "lightblue", 
           // height:100,
          //  padding: "20px", 
            borderRadius: "10px", 
            marginBottom:10
          }}>
            <p style={{ 
              fontSize: "20px", 
              fontWeight: "bold", 
              color: "black", 
              textAlign: "center", 
              marginBottom: "10px",
            }}>
              {content}
            </p>
            <p style={{ 
              fontStyle: "italic", 
              color: "gray", 
             // marginBottom: "10px",
            }}>
              - {author}
            </p>
            <ul style={{ 
              listStyleType: "none", 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: "center", 
            }}>
              {tags.map(tag => (
                <li key={tag} style={{ 
                  backgroundColor: "white", 
                  color: "blue", 
                  padding: "5px 10px", 
                  borderRadius: "20px", 
                 // margin: "5px",
                }}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
    );
  }
  
  function Quotes({ quotes }) {
    return (
      <div>
        {quotes.map(quote => (
          <Quote
            key={quote._id}
            author={quote.author}
            content={quote.content}
            tags={quote.tags}
          />
        ))}
      </div>
    );
  }

function ThirtyQuotes() {
  const [quotes, setQuotes] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        'http://localhost:5006/Quote/getmultipleQuotebyusername'
      );
      const data = await response.json();
      console.log({data})
      setQuotes(data);
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
        Get 30 Quotes
      </button>
      
      {quotes?.short &&<>
        <p><strong>Short Quotes:</strong></p>
        <Quotes quotes={quotes?.short}/>
    </> }
    {quotes?.medium &&<> 
        <p><strong>Medium Quotes:</strong></p>
        <Quotes quotes={quotes?.medium}/>
    </> }
    {quotes?.long &&<>
        <p><strong>Long Quotes:</strong></p>
        <Quotes quotes={quotes?.long}/>
    </> }
   
  
   
   
    </div>
    </>
  );
}

export default ThirtyQuotes;
