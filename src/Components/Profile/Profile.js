import React  from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../redux/state";


const Profile = (props) => {
  return (
          <div className={s.content}>
                  <ProfileInfo/>

                  <MyPosts posts ={props.posts}
                           addPost ={props.addPost}
                           updateNewPostText = {props.updateNewPostText}
                           newPostText = {props.newPostText}
                  />


          </div>

  );
}
export default Profile;
