import React, {useState} from 'react';
import './body.css';

export default function Body() {
    const [query, setQuery] = useState('');

    function updateQuery(e) {
        setQuery(e.target.value)
    }

    function searchBarKeyPress (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    return <div className="body">
        <div className="search-bar-container">
            <div className="magnifying-glass-icon" />
            <textarea className="search-bar" value={query} placeholder={'Search...'} onChange={updateQuery} onKeyPress={searchBarKeyPress} ></textarea>
        </div>
    </div>
}