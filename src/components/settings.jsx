import React, {useState, useEffect} from 'react';
import './settings.css';

export default function Settings ({CurrentWindow, setCurrentWindow, searchEngine, setSearchEngine, darkMode, setDarkMode, selectSearchBar, setSelectSearchBar, viewTime, setViewTime, viewKeyPress, setViewKeyPress, searchBarHightlight, setSearchBarHightlight, name, setName, viewWelcomeMessage, setViewWelcomeMessage}) {
    //button styles
    const [darkmodeOffStyle, setDarkmodeOffStyle] = useState();
    const [darkmodeOnStyle, setDarkmodeOnStyle] = useState();
    const [nameValue, setNameValue] = useState(name);

    const [googleStyle, setGoogleStyle] = useState();
    const [bingStyle, setBingStyle] = useState();
    const [duckDuckGoStyle, setDuckDuckGoStyle] = useState();
    const [yahooStyle, setYahooStyle] = useState();

    const [selectSearchBarOffStyle, setselectSearchBarOffStyle] = useState();
    const [selectSearchBarOnStyle, setselectSearchBarOnStyle] = useState();

    const [viewTimeOffStyle, setViewTimeOffStyle] = useState();
    const [viewTimeOnStyle, setViewTimeOnStyle] = useState();

    const [viewKeyPressOffStyle, setViewKeyPressOffStyle] = useState();
    const [viewKeyPressOnStyle, setViewKeyPressOnStyle] = useState();

    const [searchBarHighlightOffStyle, setSearchBarHighlightOffStyle] = useState();
    const [searchBarHighlightOnStyle, setSearchBarHighlightOnStyle] = useState();

    const [viewWelcomeMessageOffStyle, setViewWelcomeMessageOffStyle] = useState();
    const [viewWelcomeMessageOnStyle, setViewWelcomeMessageOnStyle] = useState();

    useEffect(()=>{
        if (searchEngine === 'Google') {
            setGoogleStyle({background: '#dadce0'});
        }else {
            setGoogleStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }

        if (searchEngine === 'Bing') {
            setBingStyle({background: '#dadce0'});
        }else {
            setBingStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }

        if (searchEngine === 'DuckDuckGo') {
            setDuckDuckGoStyle({background: '#dadce0'});
        }else {
            setDuckDuckGoStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }

        if (searchEngine === 'Yahoo') {
            setYahooStyle({background: '#dadce0'});
        }else {
            setYahooStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }
    }, [searchEngine]);

    function setSearchEngineGoogle () {
        setSearchEngine('Google');
    }

    function setSearchEngineBing () {
        setSearchEngine('Bing');
    }
    
    function setSearchEngineDuckDuckGo () {
        setSearchEngine('DuckDuckGo');
    }

    function setSearchEngineYahoo () {
        setSearchEngine('Yahoo');
    }

    function turnDarkmodeOn () {
        setDarkMode('on');
    }

    function turnDarkmodeOff () {
        setDarkMode('off');
    }

    useEffect(()=>{
        if (darkMode === 'on') {
            setDarkmodeOnStyle({background: '#dadce0'});
            setDarkmodeOffStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }else {
            setDarkmodeOnStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
            setDarkmodeOffStyle({background: '#dadce0'});
        }
    }, [darkMode]);

    function turnSelectSeachBarOn () {
        setSelectSearchBar('on');
    }

    function turnSelectSeachBarOff () {
        setSelectSearchBar('off');
    }

    useEffect(()=>{
        if (selectSearchBar === 'on') {
            setselectSearchBarOnStyle({background: '#dadce0'});
            setselectSearchBarOffStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }else {
            setselectSearchBarOnStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
            setselectSearchBarOffStyle({background: '#dadce0'});
        }
    }, [selectSearchBar]);

    function turnViewTimeOn () {
        setViewTime('on');
    }

    function turnViewTimeOff () {
        setViewTime('off');
    }

    useEffect(()=>{
        if (viewTime === 'on') {
            setViewTimeOnStyle({background: '#dadce0'});
            setViewTimeOffStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }else {
            setViewTimeOnStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
            setViewTimeOffStyle({background: '#dadce0'});
        }
    }, [viewTime]);

    function turnViewKeyPressesOn () {
        setViewKeyPress('on');
    }

    function turnViewKeyPressesOff () {
        setViewKeyPress('off');
    }

    useEffect(()=>{
        if (searchBarHightlight === 'on') {
            setSearchBarHighlightOnStyle({background: '#dadce0'});
            setSearchBarHighlightOffStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }else {
            setSearchBarHighlightOnStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
            setSearchBarHighlightOffStyle({background: '#dadce0'});
        }
    }, [searchBarHightlight]);

    function turnSearchBarHighlightOn () {
        setSearchBarHightlight('on');
    }

    function turnSearchBarHighlightOff () {
        setSearchBarHightlight('off');
    }

    useEffect(()=>{
        if (viewKeyPress === 'on') {
            setViewKeyPressOnStyle({background: '#dadce0'});
            setViewKeyPressOffStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }else {
            setViewKeyPressOnStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
            setViewKeyPressOffStyle({background: '#dadce0'});
        }
    }, [viewKeyPress]);

    function setNameValueValue (e) {
        setNameValue(e.target.value);
    }

    useEffect(()=>{
        setName(nameValue);
    }, [nameValue]);

    useEffect(()=>{
        if (viewWelcomeMessage === 'on') {
            setViewWelcomeMessageOnStyle({background: '#dadce0'});
            setViewWelcomeMessageOffStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }else {
            setViewWelcomeMessageOnStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
            setViewWelcomeMessageOffStyle({background: '#dadce0'});
        }
    }, [viewWelcomeMessage]);

    function turnViewWelcomeMessageOff () {
        setViewWelcomeMessage('off');
    }

    function turnViewWelcomeMessageOn () {
        setViewWelcomeMessage('on');
    }

    return <div className="settings" >
        <h1 className="settings-title" >SETTINGS</h1>

        <p className="settings-section-text" >-INFO-</p>

        <div className="settings-name">
            <p>Your Name is:</p>
            <textarea value={nameValue} onChange={setNameValueValue} className="settings-name-textarea" >{name}</textarea>
        </div>

        <div className="settings-break"></div>

        <div className="search-engines">
            <p className="search-engines-text" >Your current search engine is {searchEngine}</p>
            <div className="search-engines-buttons-container">
                <button className="search-engines-buttons" style={googleStyle} onClick={setSearchEngineGoogle} >
                    <img src="" draggable="false" />
                    Google
                </button>
                <button className="search-engines-buttons" style={bingStyle} onClick={setSearchEngineBing} >
                    <img src="" draggable="false" />
                    Bing
                </button>
                <button className="search-engines-buttons" style={duckDuckGoStyle} onClick={setSearchEngineDuckDuckGo} >
                    <img src="" draggable="false" />
                    DuckDuckGo
                </button>
                <button className="search-engines-buttons" style={yahooStyle} onClick={setSearchEngineYahoo} >
                    <img src="" draggable="false" />
                    Yahoo!
                </button>
            </div>
        </div>

        <p className="settings-section-text" >-APPERANCE-</p>

        <div className="darkmode">
            <p>Darkmode is {darkMode}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={darkmodeOffStyle} onClick={turnDarkmodeOff} >Turn Off</button>
                <button className="darkmode-buttons" style={darkmodeOnStyle} onClick={turnDarkmodeOn} >Turn On</button>
            </div>
        </div>

        <div className="settings-break"></div>

        <div className="darkmode">
            <p>View Time is {viewTime}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={viewTimeOffStyle} onClick={turnViewTimeOff} >Turn Off</button>
                <button className="darkmode-buttons" style={viewTimeOnStyle} onClick={turnViewTimeOn} >Turn On</button>
            </div>
        </div>

        <div className="settings-break"></div>

        <div className="darkmode">
            <p>View Key Presses is {viewKeyPress}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={viewKeyPressOffStyle} onClick={turnViewKeyPressesOff} >Turn Off</button>
                <button className="darkmode-buttons" style={viewKeyPressOnStyle} onClick={turnViewKeyPressesOn} >Turn On</button>
            </div>
        </div>

        <div className="settings-break"></div>

        <div className="darkmode">
            <p>View Welcome Message is {viewWelcomeMessage}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={viewWelcomeMessageOffStyle} onClick={turnViewWelcomeMessageOff} >Turn Off</button>
                <button className="darkmode-buttons" style={viewWelcomeMessageOnStyle} onClick={turnViewWelcomeMessageOn} >Turn On</button>
            </div>
        </div>

        <p className="settings-section-text" >-EXTRAS-</p>

        <div className="darkmode">
            <p>Select Search Bar is {selectSearchBar}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={selectSearchBarOffStyle} onClick={turnSelectSeachBarOff} >Turn Off</button>
                <button className="darkmode-buttons" style={selectSearchBarOnStyle} onClick={turnSelectSeachBarOn} >Turn On</button>
            </div>
        </div>

        <div className="settings-break"></div>
        
        <div className="darkmode">
            <p>Search Bar click Highlight is {searchBarHightlight}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={searchBarHighlightOffStyle} onClick={turnSearchBarHighlightOff} >Turn Off</button>
                <button className="darkmode-buttons" style={searchBarHighlightOnStyle} onClick={turnSearchBarHighlightOn} >Turn On</button>
            </div>
        </div>

        <br/>
    </div>
}