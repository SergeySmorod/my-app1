import React  from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
          <div className={s.content}>

              <div>
                  <textarea></textarea>
                  <button>Add text</button>
              </div>
              <Post message='Hello? how are you' likes = '5'/>
              <Post message='HHi, I am fine' likes = '6'/>
          </div>

  );
}
export default MyPosts;
