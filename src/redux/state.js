
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
            ]
        }

    },
    getState () {
        return this._state;
    },
    _callsubscriber ()  {
        console.log('hfjfjhwk')
    },
    addPost (postMessage) {
        let newPost = {
            message: this._state.profilePage.newPostText,
            likes: '5',
            id: '1'
        }
        this._state.profilePage.posts.push(newPost)
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
}
export default store;
