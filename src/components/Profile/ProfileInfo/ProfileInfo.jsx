import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import profilePhoto from "../../../assets/images/git.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large !== null ? profile.photos.large : profilePhoto}
                     className={styles.profilePhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={styles.aboutMe}>
                {profile.aboutMe}
            </div>
        </div>
    );
}

export default ProfileInfo;