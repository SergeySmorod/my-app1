import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
//const ADD_POST = 'ADD-POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
//const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hello? how are you', likes: '5', id: '1'},
                {message: 'Hello I am fine', likes: '7', id: '2'}
            ],
            newPostText: ''
        }
        ,
        dialogsPage: {
            DialogsData: [
                {id: '1', name: 'Dmitry'},
                {id: '2', name: 'Sveta'},
                {id: '3', name: 'Sasha'},
                {id: '4', name: 'Igor'},
                {id: '5', name: 'Valera'},
            ],
            messagesData: [
                {id: '1', message: 'Hello'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'I am fine'},
                {id: '4', message: 'Yoo'},
                {id: '5', message: 'Yoo'},
            ],
            newMessageBody: ''
        },
        sideBar: {}
    },
    getState () {
        return this._state;
    },
    _callsubscriber ()  {
        console.log('hfjfjhwk')
    },
    addPost () {
        let newPost = {
            message: this._state.profilePage.newPostText,
            likes: '5',
            id: '1'
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callsubscriber(this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callsubscriber(this._state)
    },
    subscribe (observer) {
        this._callsubscriber = observer;
        window.store = store;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
         this._callsubscriber(this._state)
        // if (action.type === ADD_POST){
        //     let newPost = {
        //         message: this._state.profilePage.newPostText,
        //         likes: '5',
        //         id: '1'
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = '';
        //     this._callsubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_POST_TEXT){
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callsubscriber(this._state)
        // }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        //      this._state.dialogsPage.newMessageBody =action.body;
        //      this._callsubscriber(this._state)
        // }else if (action.type === SEND_MESSAGE){
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.messagesData.push({id: '6', message: body})
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._callsubscriber(this._state)
        //
        // }
}
}
// export const addPostActionCreator = () =>({type: ADD_POST})
// export const updateNewPostTextActionCreator = (text) =>
//     ({type: UPDATE_NEW_POST_TEXT, newText: text})
//
// export const sendMessageCreator = () =>({type: SEND_MESSAGE})
// export const updateNewMessageBodyCreator =
//     (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default store;
