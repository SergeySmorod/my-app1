import React  from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
          <div className={s.content}>

              <img src='https://bipbap.ru/wp-content/uploads/2018/09/maxresdefault-1-4.jpg'/>

              {props.message}, {props.likes}

              <div className={s.item}>
                  <span>like</span>
              </div>
          </div>

  );
}
export default Post;
