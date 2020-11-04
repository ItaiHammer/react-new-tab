import React, {useState, useEffect, useRef} from 'react';
import './body.css';

let d = new Date();

export default function Body({CurrentWindow, setCurrentWindow, searchEngine, darkMode, selectSearchBar, viewTime, viewKeyPress, searchBarHightlight, name, viewWelcomeMessage, backgroundImage, shadows}) {
    const [query, setQuery] = useState('');
    const [lastQuery, setlastQuery] = useState('');
    const [timeTextStyle, setTimeTextStyle] = useState({});
    const [time, setTime] = useState({});
    const [keyPressStyle, setKeyPressStyle] = useState({});
    const [viewWelcomeMessageStyle, setViewWelcomeMessageStyle] = useState({});
    const [textShadows, setTextShadows] = useState();

    const textAreaRef = useRef();
    const [timeText, setTimeText] = useState();
    let timeBlur = false;
    const [bodyStyle, setBodyStyle] = useState();

    useEffect(() => {
        let newTime = {
            hour: d.getHours(),
            minute: d.getMinutes(),
            timeSufix: 'PM'
        }

        if (newTime.hour > 12) {
            newTime.hour -= 12;
            newTime.timeSufix = 'PM';
        } else {
            newTime.timeSufix = 'AM';
        }

        if (newTime.minute.length < 2) {
            newTime.minute = `0${newTime.minute}`;
        }

        setTimeText(time.hour+':'+time.minute+time.timeSufix);
            
        if (viewTime === 'on') {
            setTimeTextStyle({display: 'block'});
        }

        if (viewKeyPress === 'on') {
            setKeyPressStyle({display: 'block'});
        }

        if (viewWelcomeMessage === 'on') {
            setViewWelcomeMessageStyle({display: 'flex'});
        }

        if (backgroundImage === 'off') {
            setBodyStyle();
        }else {
            setBodyStyle({background: 'rgba(0, 0, 0, 0)'});
        }

        if (shadows === 'on') {
            if (darkMode === 'on') {
                setTextShadows({textShadow: '0 0 20px rgba(255, 255, 255, 0.8)'});
            }else {
                setTextShadows({textShadow: '0 0 20px rgba(0, 0, 0, 0.5)'});
            }
        }else {
            setTextShadows({textShadow: '0 0 20px rgba(255, 255, 255, 0.0)'});
        }

        setTime(newTime);
    }, [CurrentWindow, viewTime, d, viewKeyPress, backgroundImage, shadows, darkMode]);

    useEffect(() => {
        if(textAreaRef != null && selectSearchBar === 'on') textAreaRef.current.select();
    }, [textAreaRef, selectSearchBar]);

    function updateQuery(e) {
        setQuery(e.target.value);
    }

    function searchBarKeyPress (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            search();
        }

        setlastQuery(e.key);
    }

    function search () {
        if (query.length > 0) {
            if (searchEngine === 'Google') {
                window.location = 'https://www.google.com/search?q='+query; //Google search
            }else if (searchEngine === 'Bing') {
                window.location = 'https://www.bing.com/search?q='+query; //Bing search
            }else if (searchEngine === 'DuckDuckGo') {
                window.location = 'https://www.duckduckgo.com/?q='+query; //DuckDuckGo search
            }else if (searchEngine === 'Yahoo') {
                window.location = 'https://search.yahoo.com/search?q='+query; //Yahoo search
            }else {
                window.location = 'https://www.google.com/search?q='+query; //Google search
            }
        }
    }

    function setTimeBlur () {
        timeBlur = true;
    }

    function highlightSearchBar (e) {
        if (searchBarHightlight === 'on' && timeBlur === true) {
            timeBlur = false;
            e.target.select();
        }
    }

    return <div className="body" style={bodyStyle} >
        <div className="welcome-message" style={viewWelcomeMessageStyle} >
            <p className="welcome-message-text" style={textShadows} >Hello {name}, welcome!</p>
        </div>
        <div className="time" style={timeTextStyle} >
            <h1 className="time-text" style={textShadows} >{time.hour}:{time.minute}{time.timeSufix}</h1>
        </div>
        <div className="search-bar-container" >
            <div className="magnifying-glass-icon" onClick={search} />
            <textarea className="search-bar" ref={textAreaRef} value={query} placeholder={'Search...'} onChange={updateQuery} onKeyPress={searchBarKeyPress} onClick={highlightSearchBar} onBlur={setTimeBlur} ></textarea>
        </div>
        <div className="current-key" style={keyPressStyle} >
            <p className="current-key-text" style={textShadows} >You pressed the "{lastQuery}" key</p>
        </div>

        <p className="bottom-watermark" style={textShadows} >Using {searchEngine}</p>
    </div>
}