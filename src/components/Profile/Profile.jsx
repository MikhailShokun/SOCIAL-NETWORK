import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <ProfileInfo profile={props.profile} aboutMe={props.aboutMe}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;