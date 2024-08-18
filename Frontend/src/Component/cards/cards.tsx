import React, { useEffect, useState } from 'react';
import './cards.css'
import axios from 'axios';
import Card from './card';

const Cards = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    // Fetch data from the server
    useEffect(() => {
      axios.get(' http://localhost:3000/cards')
        .then(response => {
          setData(response.data);
          setFilteredData(response.data); // Initialize with full data
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    // Handle search input changes
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      if (query) {
        const filtered = data.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(data); // Reset to full data if search is empty
      }
    };

  return (
    <main className="main-content">
        <div className="hero">
          <h1>How can we help?</h1>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery} 
              onChange={handleSearch} 
            />
            <button>→</button>
          </div>
        </div>

        <div className="cards">
          {filteredData.map((item, index) => (
            <Card key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </main>
  );
};

export default Cards;
