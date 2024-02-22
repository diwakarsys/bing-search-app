// SearchComponent.js
import React, { useState } from 'react';
import axios from 'axios';


const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic (e.g., fetch data from an API)
    // For simplicity, using a hardcoded array in this example
    const data = [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      // Add more data as needed
    ];
    
    // Filter results based on the search term
    const filteredResults:any = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
  };

  const searchBingApi = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.cognitive.microsoft.com/bing/v7.0/search?q=${query}`,
        {
          headers: {
            'Ocp-Apim-Subscription-Key': 'YOUR_BING_API_KEY',
          },
        }
      );

      setResults(response.data.webPages.value);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(); // Call handleSearch on every input change
          }}
      />

      <ul>
        {results.map((result:any) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
