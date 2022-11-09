import React  from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
          <div className={s.content}>
              <div className={s.item}>
              <img src='https://cf1-static.cybo.com/wikiphotos_2016_05_10_13_16_21/e9/ad/e9ad4922b28fe4974d4b5b8d6ba6ffd088f5d52f/6517429_979fadec3497df0d61079db29519b4664be0d89b_CalesFonts01.jpeg'/>
              </div>
              <div >
                  ava+description
              </div>
              <div>
                 <MyPosts/>
              </div>

          </div>

  );
}
export default Profile;
