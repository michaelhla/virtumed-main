import React from 'react'; 
import './searchbar.css'; 
import {FaSearch} from 'react-icons/fa'



const Searchbar = ({onChange, placeholder, value, defaultText}) => {

  function handleKeyPress(target) {
    if(target.charCode === 13)
    {
      value = document.getElementById("searchTxt").value
      window.location.href = `/s?=${value}`
    }
  }
    return (
      <div className="Search">
        <span className="SearchSpan">
          <FaSearch />
        </span>
        <input
          className="SearchInput"
          type="text"
          id = "searchTxt"
          onChange={onChange}
          onKeyPress ={e => handleKeyPress(e)}
          placeholder={placeholder}
          defaultValue = {defaultText || null}
        />
      </div>
    );
  };

export default Searchbar; 