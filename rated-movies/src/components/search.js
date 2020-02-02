import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap';


const Search = ({searchValue,setSearchValue}) =>{
  const handleSearch = e =>{
    setSearchValue(e.target.value)
  }
    return(
        <InputGroup>
          <FormControl
            placeholder="search..."
            aria-label="search"
            onChange={handleSearch} value={searchValue}
          />
          </InputGroup>
    )
}

export default Search