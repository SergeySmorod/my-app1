import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree =()=> {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App/>
            </Provider>
        </React.StrictMode>
    );
}
renderEntireTree()
store.subscribe(() => {
        renderEntireTree();
});
reportWebVitals();