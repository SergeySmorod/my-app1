const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {message: 'Hello? how are you', likes: '5', id: '1'},
        {message: 'Hello I am fine', likes: '7', id: '2'}
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action) =>{

    switch (action.type){
        case ADD_POST:{
            let newPost = {
            message: state.newPostText,
            likes: '5',
            id: '1'
        }
        let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost)
        stateCopy.newPostText = '';
            return stateCopy;}
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};

        stateCopy.newPostText = action.newText;
        return stateCopy;
        default:
            return state;

    }

}
export const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;

