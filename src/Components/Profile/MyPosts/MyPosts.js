import React  from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";

const MyPosts = (props) => {
    let postElements=
        props.posts.map( p =>  <Post message={p.message} likes = {p.likes} id = {p.id}/>)
    let newPostElement = React.createRef();
    let addPost = ()=>{

        props.dispatch(addPostActionCreator());
    }
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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
