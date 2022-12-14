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
        return  {...state,
         posts: [...state.posts, newPost],
         newPostText: '',
        };

            }
        case UPDATE_NEW_POST_TEXT:
            return  {...state,
                newPostText: action.newText
            };

        //stateCopy.newPostText = action.newText;

        default:
            return state;

    }

}
export const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;

