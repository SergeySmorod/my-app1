import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export  let renderEntireTree =(state)=> {

    root.render(
        <React.StrictMode>
            <App appState={state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText = {store.updateNewPostText.bind(store)} />
        </React.StrictMode>
    );
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)
reportWebVitals();