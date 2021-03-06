import React, {useState, useEffect} from 'react';
import './settings.css';

export default function Settings ({CurrentWindow, setCurrentWindow, searchEngine, setSearchEngine, darkMode, setDarkMode, selectSearchBar, setSelectSearchBar, viewTime, setViewTime, viewKeyPress, setViewKeyPress, searchBarHightlight, setSearchBarHightlight, name, setName, viewWelcomeMessage, setViewWelcomeMessage, backgroundImage, setBackgroundImage, shadows, setShadows, centerPicture, setCenterPicture}) {
    //button styles
    const [darkmodeOffStyle, setDarkmodeOffStyle] = useState();
    const [darkmodeOnStyle, setDarkmodeOnStyle] = useState();
    const [nameValue, setNameValue] = useState(name);
    const [backgroundImageValue, setBackgroundImageValue] = useState(backgroundImage);
    const [settingsBackgroundImage, setSettingsBackgroundImage] = useState();
    const [settingsBackgroundImageStyle, setSettingsBackgroundImageStyle] = useState();
    const [settingsShadowsOffStyle, setSettingsShadowsOffStyle] = useState();
    const [settingsShadowsOnStyle, setSettingsShadowsOnStyle] = useState();

    const [blur, setBlur] = useState();

    const [googleStyle, setGoogleStyle] = useState();
    const [bingStyle, setBingStyle] = useState();
    const [duckDuckGoStyle, setDuckDuckGoStyle] = useState();
    const [yahooStyle, setYahooStyle] = useState();
    const [ecosiaStyle, setEcosiaStyle] = useState();

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

    const [centerPictureValue, setcenterPictureValue] = useState(centerPicture);
    const [settingsCenterPicture, setSettingsCenterPicture] = useState();
    const [settingsCenterPictureStyle, setSettingsCenterPictureStyle] = useState();

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

        if (searchEngine === 'Ecosia') {
            setEcosiaStyle({background: '#dadce0'});
        }else {
            setEcosiaStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }

        if (darkMode === 'on') {
            setSettingsBackgroundImageStyle({filter: 'invert() brightness(100%)'});
        }else {
            setSettingsBackgroundImageStyle({filter: 'brightness(100%)'});
        }

        if (backgroundImage === 'off') {
            setSettingsBackgroundImage(<p></p>);
        }else {
            setSettingsBackgroundImage(<img className="settings-background-image-preview" draggable="false" style={settingsCenterPictureStyle} src={backgroundImage} />); 
        }

        if (darkMode === 'on') {
            setSettingsCenterPictureStyle({filter: 'brightness(100%)'});
        }else {
            setSettingsCenterPictureStyle({filter: 'invert() brightness(100%)'});
        }

        if (centerPicture === 'off') {
            setSettingsCenterPicture(<p></p>);
        }else {
            setSettingsCenterPicture(<img className="settings-background-image-preview" draggable="false" style={settingsCenterPictureStyle} src={centerPicture} />); 
        }

    }, [searchEngine, CurrentWindow, backgroundImage, centerPicture, darkMode]);

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

    function setSearchEngineEcosia () {
        setSearchEngine('Ecosia');
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

    function disableEnter (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
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

    function setBackgroundImageValueValue (e) {
        setBackgroundImage(e.target.value);
    }

    function turnBackgroundImageOff () {
        setBackgroundImage('off');
    }

    useEffect(()=>{
        setBackgroundImage(backgroundImageValue);
    }, [backgroundImageValue]);

    function turnShadowsOff () {
        setShadows('off');
    }

    function turnShadowsOn () {
        setShadows('on');
    }

    function turnCenterPictureOff () {
        setCenterPicture('off');
    }

    useEffect(()=>{
        if (shadows === 'on') {
            setSettingsShadowsOnStyle({background: '#dadce0'});
            setSettingsShadowsOffStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
        }else {
            setSettingsShadowsOnStyle({background: '#F2F2F2', border: '2px solid #dadce0'});
            setSettingsShadowsOffStyle({background: '#dadce0'});
        }
    }, [shadows]);

    function setCenterPictureValue (e) {
        setcenterPictureValue(e.target.value);
    }

    useEffect(()=>{
        setCenterPicture(centerPictureValue);
    }, [centerPictureValue]);

    function setBlurFunction () {
        setBlur(true);
    }

    function highlightSearchBar (e) {
        if (searchBarHightlight === 'on' && blur === true) {
            setBlur(false);
            e.target.select();
        }
    }

    return <div className="settings" >
        <h1 className="settings-title" >SETTINGS</h1>

        <p className="settings-section-text" >-INFO-</p>

        <div className="settings-name">
            <p>Your Name is:</p>
            <textarea value={nameValue} onKeyPress={disableEnter} onChange={setNameValueValue} className="settings-name-textarea" >{name}</textarea>
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
                <button className="search-engines-buttons" style={ecosiaStyle} onClick={setSearchEngineEcosia} >
                    <img src="" draggable="false" />
                    Ecosia
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

        <div className="settings-background-image">
            <p>Background Image is:</p>
            <div className="settings-background-image-buttons-container">
                <button onClick={turnBackgroundImageOff} >Turn Off</button>
                <textarea value={backgroundImage} onChange={setBackgroundImageValueValue} placeholder="Link to Picture" onKeyPress={disableEnter} onBlur={setBlurFunction} onClick={highlightSearchBar} className="settings-name-textarea" >{backgroundImage}</textarea>
            </div>
            {settingsBackgroundImage}
        </div>

        <div className="settings-break"></div>

        <div className="darkmode">
            <p>View Welcome Message is {viewWelcomeMessage}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={viewWelcomeMessageOffStyle} onClick={turnViewWelcomeMessageOff} >Turn Off</button>
                <button className="darkmode-buttons" style={viewWelcomeMessageOnStyle} onClick={turnViewWelcomeMessageOn} >Turn On</button>
            </div>
        </div>

        <div className="settings-break"></div>

        <div className="settings-background-image">
            <p>Icon is:</p>
            <div className="settings-background-image-buttons-container">
                <button onClick={turnCenterPictureOff} >Turn Off</button>
                <textarea value={centerPicture} onChange={setCenterPictureValue} placeholder="Link to Picture" onKeyPress={disableEnter} onBlur={setBlurFunction} onClick={highlightSearchBar} className="settings-name-textarea" >{centerPicture}</textarea>
            </div>
            {settingsCenterPicture}
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
            <p>Shadows are {shadows}</p>
            <div className="darkmode-buttons-container">
                <button className="darkmode-buttons" style={settingsShadowsOffStyle} onClick={turnShadowsOff} >Turn Off</button>
                <button className="darkmode-buttons" style={settingsShadowsOnStyle} onClick={turnShadowsOn} >Turn On</button>
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