import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import state from "./redux/state";
import {addPost, updateNewPostText} from "./redux/state";


export  let renderEntireTree =(state)=> {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} updateNewPostText = {updateNewPostText} />
        </React.StrictMode>
    );
}

reportWebVitals();

