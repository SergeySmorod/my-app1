import React  from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
let myPosts = [
    {message: 'Hello? how are you', likes: '5', id: '1'},
    {message: 'Hello I am fine', likes: '7', id: '2'}
]
const MyPosts = (props) => {
  return (
          <div className={s.content}>

              <div>
                  <textarea></textarea>
                  <button>Add text</button>
              </div>
              <Post message={myPosts[0].message} likes = {myPosts[0].likes} id = {myPosts[0].id}/>
              <Post message={myPosts[1].message} likes = {myPosts[1].likes} id = {myPosts[1].id}/>
          </div>

  );
}
export default MyPosts;
