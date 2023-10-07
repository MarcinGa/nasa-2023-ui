import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.scss';

function Search() {
    return <>
        <div className="search-form">
            <input type="text" placeholder="Find"/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
    </>
}

export default Search;