import React from 'react';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import {renderEntireTree} from './render'

// addPost('Hello artem');
// let renderEntireTree =()=> {
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//         <React.StrictMode>
//             <App appState={state} addPost={addPost}/>
//         </React.StrictMode>
//     );
// }
renderEntireTree(state)
reportWebVitals();