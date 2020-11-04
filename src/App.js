import React, { useState, useEffect } from "react";
import "./App.css";

//components
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import Settings from "./components/settings.jsx";

function App() {
  const [CurrentWindow, setCurrentWindow] = useState('body');
  const [darkMode, setDarkMode] = useState();
  const [searchEngine, setSearchEngine] = useState();
  const [selectSearchBar, setSelectSearchBar] = useState();
  const [viewTime, setViewTime] = useState();
  const [viewKeyPress, setViewKeyPress] = useState();
  const [searchBarHightlight, setSearchBarHightlight] = useState();
  const [name, setName] = useState();
  const [viewWelcomeMessage, setViewWelcomeMessage] = useState();
  const [backgroundImage, setBackgroundImage] = useState();
  const [bodyStyle, setBodyStyle] = useState({});
  const [shadows, setShadows] = useState({});
  const [backgroundImageStyle, setBackgroundImageStyle] = useState({});

  useEffect(() => {
    if (localStorage.getItem('searchEngine') == null || localStorage.getItem('searchEngine') === '') {
      localStorage.setItem('searchEngine', 'Google');
    }
    if (localStorage.getItem('darkMode') == null || localStorage.getItem('darkMode') === '') {
      localStorage.setItem('darkMode', 'off');
    }
    if (localStorage.getItem('selectSearchBar') == null || localStorage.getItem('selectSearchBar') === '') {
      localStorage.setItem('selectSearchBar', 'on');
    }
    if (localStorage.getItem('viewTime') == null || localStorage.getItem('viewTime') === '') {
      localStorage.setItem('viewTime', 'off');
    }
    if (localStorage.getItem('viewKeyPress') == null || localStorage.getItem('viewKeyPress') === '') {
      localStorage.setItem('viewKeyPress', 'off');
    }
    if (localStorage.getItem('searchBarHightlight') == null || localStorage.getItem('searchBarHightlight') === '') {
      localStorage.setItem('searchBarHightlight', 'off');
    }
    if (localStorage.getItem('name') == null || localStorage.getItem('name') === '') {
      localStorage.setItem('name', "name");
    }
    if (localStorage.getItem('viewWelcomeMessage') == null || localStorage.getItem('viewWelcomeMessage') === '') {
      localStorage.setItem('viewWelcomeMessage', "off");
    }
    if (localStorage.getItem('backgroundImage') == null || localStorage.getItem('backgroundImage') === '') {
      localStorage.setItem('backgroundImage', "off");
    }
    if (localStorage.getItem('shadows') == null || localStorage.getItem('shadows') === '') {
      localStorage.setItem('shadows', "off");
    }

    setSearchEngine(localStorage.getItem('searchEngine'));
    setDarkMode(localStorage.getItem('darkMode'));
    setSelectSearchBar(localStorage.getItem('selectSearchBar'));
    setViewTime(localStorage.getItem('viewTime'));
    setViewKeyPress(localStorage.getItem('viewKeyPress'));
    setSearchBarHightlight(localStorage.getItem('searchBarHightlight'));
    setName(localStorage.getItem('name'));
    setViewWelcomeMessage(localStorage.getItem('viewWelcomeMessage'));
    setBackgroundImage(localStorage.getItem('backgroundImage'));
    setShadows(localStorage.getItem('shadows'));
  }, [])

  useEffect(() => {
    localStorage.setItem('searchEngine', searchEngine);
  }, [searchEngine]);

  useEffect(() => {
    if (darkMode === 'on') {
      setBodyStyle({ filter: 'brightness(90%) invert()' });
      setBackgroundImageStyle({filter: 'invert() brightness(100%) contrast(70%)'});
    } else {
      setBodyStyle({ filter: 'brightness(100%)' });
      setBackgroundImageStyle({filter: 'brightness(100%) contrast(70%)'});
    }

    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('selectSearchBar', selectSearchBar);
  }, [selectSearchBar]);

  useEffect(() => {
    localStorage.setItem('viewTime', viewTime);
  }, [viewTime]);

  useEffect(() => {
    localStorage.setItem('viewKeyPress', viewKeyPress);
  }, [viewKeyPress]);

  useEffect(() => {
    localStorage.setItem('searchBarHightlight', searchBarHightlight);
  }, [searchBarHightlight]);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('viewWelcomeMessage', viewWelcomeMessage);
  }, [viewWelcomeMessage]);

  useEffect(() => {
    localStorage.setItem('backgroundImage', backgroundImage);
  }, [backgroundImage]);

  useEffect(() => {
    localStorage.setItem('shadows', shadows);
  }, [shadows]);

  const page = CurrentWindow === 'body' ? <Body CurrentWindow={CurrentWindow} setCurrentWindow={setCurrentWindow} searchEngine={searchEngine} darkMode={darkMode} selectSearchBar={selectSearchBar} viewTime={viewTime} viewKeyPress={viewKeyPress} searchBarHightlight={searchBarHightlight} name={name} viewWelcomeMessage={viewWelcomeMessage} backgroundImage={backgroundImage} shadows={shadows} />
    : CurrentWindow === 'settings' ? <Settings CurrentWindow={CurrentWindow} setCurrentWindow={setCurrentWindow} searchEngine={searchEngine} setSearchEngine={setSearchEngine} darkMode={darkMode} setDarkMode={setDarkMode} selectSearchBar={selectSearchBar} setSelectSearchBar={setSelectSearchBar} viewTime={viewTime} setViewTime={setViewTime} viewKeyPress={viewKeyPress} setViewKeyPress={setViewKeyPress} searchBarHightlight={searchBarHightlight} setSearchBarHightlight={setSearchBarHightlight} name={name} setName={setName} viewWelcomeMessage={viewWelcomeMessage} setViewWelcomeMessage={setViewWelcomeMessage} backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage} shadows={shadows} setShadows={setShadows} />
      : ''

  return (
    <div className="app-body" style={bodyStyle} >
      <Header CurrentWindow={CurrentWindow} setCurrentWindow={setCurrentWindow} />
      {page}
      <img className="background-img" style={backgroundImageStyle} src={backgroundImage} draggable="false" />
    </div>
  );
}

export default App;
