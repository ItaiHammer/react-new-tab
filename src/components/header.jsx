import React from 'react';
import './header.css';

export default function header ({CurrentWindow, setCurrentWindow}) {

    function setCurrentWindowBody () {
        setCurrentWindow('body');
    }

    function setCurrentWindowSettings () {
        setCurrentWindow('settings');
    }

    return <div className="header">
        <p className="settings-button" onClick={setCurrentWindowBody} >BODY</p>
        <p className="settings-button" onClick={setCurrentWindowSettings} >SETTINGS</p>
    </div>
}