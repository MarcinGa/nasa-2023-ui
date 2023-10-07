import React, { useState, useEffect } from 'react';
import './Search.scss';

function Search() {
    return <>
        <div className="search-form">
            <input type="text" placeholder="Find"/>
            <button>Find</button>
        </div>
    </>
}

export default Search;