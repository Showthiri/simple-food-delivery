import React, { useEffect, useState } from 'react'
import './Home.css'
import { Menu } from './Menu';
import Homeoffer from './Homeoffer';

const Home = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState('');
  
    const restaurants = [
      'Southindian',
      'Northindian',
      'Pizza',
      'Sandwitch',
      'Briyani',
      'Cooldrinks',
      'Dosa',
      'Idly',
      'Parotta',
      'chicken briyani',
      'mutton briyani'
    ];
  
    // Handle input change
    const handleInputChange = (e) => {
      const value = e.target.value;
      setQuery(value);
  
      if (value.length > 0) {
        // Filter restaurants based on the input query
        const filteredSuggestions = restaurants.filter((restaurant) =>
          restaurant.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    };
  
    // Select a suggestion
    const handleSuggestionClick = (suggestion) => {
      setQuery(suggestion);
      setSuggestions([]); // Hide suggestions after selection
    };

     useEffect(()=>{
        window.scrollTo(0,0);
      }, []);
    
  return (
    <>
       <div className="home">
      <div className="main text-center">
        <h2 className="m-3">
          <span>BEST RESTAURANT</span> CAFES AND BAR--   <span> DELICIOUS FOOD... </span>
        </h2>
        <div className="select">
          <select name="" id="location">
            <option value="">-- Select City --</option>
            <option value="Shalimar Bagh, Delhi">Shalimar Bagh, Delhi</option>
            <option value="Janpat, Delhi">Janpat, Delhi</option>
            <option value="MSP, Delhi">MSP, Delhi</option>
            <option value="MSP, Pune">MSP, Pune</option>
            <option value="Anand Vihar, Delhi">Anand Vihar, Delhi</option>
            <option value="Vaderhali, Bangalore">Vaderhali, Bangalore</option>
          </select>
          <input
            type="text"
            id="max"
            placeholder="Search restaurant"
            value={query}
            onChange={handleInputChange}
          />
            </div>
          <div className="sugges">

          <div className="autocomplete-suggestions">
            {suggestions.length > 0 && query && (
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="button">
          <button className="home-btn">Search here</button>
        </div>
      </div>
    </div>
    <Menu/>
    <Homeoffer/>
    </>
    
  )
}

export default Home