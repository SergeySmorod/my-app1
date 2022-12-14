import React  from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements=
        props.posts.map( p =>  <Post message={p.message} likes = {p.likes} id = {p.id}/>)
    let newPostElement = React.createRef();
    let onAddPost = ()=>{
    props.addPost();

    }
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add text</button>
            </div>
            {postElements}
        </div>

    );
}
export default MyPosts;
