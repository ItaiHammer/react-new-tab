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
  const [bodyStyle, setBodyStyle] = useState({});

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

    setSearchEngine(localStorage.getItem('searchEngine'));
    setDarkMode(localStorage.getItem('darkMode'));
    setSelectSearchBar(localStorage.getItem('selectSearchBar'));
    setViewTime(localStorage.getItem('viewTime'));
    setViewKeyPress(localStorage.getItem('viewKeyPress'));
    setSearchBarHightlight(localStorage.getItem('searchBarHightlight'));
  }, [])

  useEffect(() => {
    localStorage.setItem('searchEngine', searchEngine);
  }, [searchEngine]);

  useEffect(() => {
    if (darkMode === 'on') {
      setBodyStyle({ filter: 'brightness(90%) invert()' });
    } else {
      setBodyStyle({ filter: 'brightness(100%)' });
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

  const page = CurrentWindow === 'body' ? <Body CurrentWindow={CurrentWindow} setCurrentWindow={setCurrentWindow} searchEngine={searchEngine} selectSearchBar={selectSearchBar} viewTime={viewTime} viewKeyPress={viewKeyPress} searchBarHightlight={searchBarHightlight} />
    : CurrentWindow === 'settings' ? <Settings CurrentWindow={CurrentWindow} setCurrentWindow={setCurrentWindow} searchEngine={searchEngine} setSearchEngine={setSearchEngine} darkMode={darkMode} setDarkMode={setDarkMode} selectSearchBar={selectSearchBar} setSelectSearchBar={setSelectSearchBar} viewTime={viewTime} setViewTime={setViewTime} viewKeyPress={viewKeyPress} setViewKeyPress={setViewKeyPress} searchBarHightlight={searchBarHightlight} setSearchBarHightlight={setSearchBarHightlight} />
      : ''

  return (
    <div className="app-body" style={bodyStyle} >
      <Header CurrentWindow={CurrentWindow} setCurrentWindow={setCurrentWindow} />
      {page}
    </div>
  );
}

export default App;
