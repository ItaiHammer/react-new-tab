import React, {useState} from 'react';
import './body.css';

export default function Body() {
    const [query, setQuery] = useState('');

    function updateQuery(e) {
        setQuery(e.target.value)
    }

    return <div className="body">
        <div className="search-bar-container">
            <div className="magnifying-glass-icon" />
            <textarea className="search-bar" value={query} onChange={updateQuery}></textarea>
        </div>
    </div>
}