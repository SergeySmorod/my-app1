import {renderEntireTree} from "../render";

let state = {
    profilePage: {posts: [
            {message: 'Hello? how are you', likes: '5', id: '1'},
            {message: 'Hello I am fine', likes: '7', id: '2'}
        ],
    newPostText: ''}
    ,
    dialogsPage:{DialogsData: [
            {id: '1' , name: 'Dmitry'},
            {id: '2' , name: 'Sveta'},
            {id: '3' , name: 'Sasha'},
            {id: '4' , name: 'Igor'},
            {id: '5' , name: 'Valera'},
        ],
        messagesData: [
            {id: '1' , message: 'Hello'},
            {id: '2' , message: 'How are you?'},
            {id: '3' , message: 'I am fine'},
            {id: '4' , message: 'Yoo'},
            {id: '5' , message: 'Yoo'},
        ]}

}
window.state = state;
export  let addPost =(postMessage)=> {
       let newPost = {
        message: postMessage,
        likes: '5',
        id: '1'
    }
state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}
export  let updateNewPostText =(newText)=> {
        state.profilePage.newPostText= newText;
    renderEntireTree(state)
}
export default state;
