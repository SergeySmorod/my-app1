import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
});

let store = createStore(reducers);
window.store = store;
export default store;