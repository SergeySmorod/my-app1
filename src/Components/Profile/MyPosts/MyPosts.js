import React  from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import state, {updateNewPostText} from "../../../redux/state"
/*let myPosts = [
    {message: 'Hello? how are you', likes: '5', id: '1'},
    {message: 'Hello I am fine', likes: '7', id: '2'}
]*/
const MyPosts = (props) => {
    let postElements=
        props.posts.map( p =>  <Post message={p.message} likes = {p.likes} id = {p.id}/>)
    let newPostElement = React.createRef();
    let addPost = ()=>{
        props.dispatch({type:'ADD-POST'});
    }
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
    }
    return (
        <div className={s.content}>

            <div>
                <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add text</button>
            </div>
            {postElements}
        </div>

    );
}
export default MyPosts;
