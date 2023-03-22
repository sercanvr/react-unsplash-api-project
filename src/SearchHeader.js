import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchHeader({search}) {
const [valueInput, setValue] = useState('')

  const handleFormSubmit = (event) => {
    debugger;
    event.preventDefault();
    search(valueInput);
};


const handleChange = (event) => {
    setValue(event.target.value)
}

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">
          <h2>Unsplash.API</h2>
        </label>
        <div className='searchIcon'>
          <FontAwesomeIcon  className='searchLogo' icon={faSearch} color="hsl(0, 0%, 58%)" />
        <input value={valueInput} onChange={handleChange} id="search" type="text" placeholder="Search high-resolution images" />

        </div>
      </form>
    </div>
  );
}

export default SearchHeader;