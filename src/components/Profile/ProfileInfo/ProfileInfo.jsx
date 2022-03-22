import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import profilePhoto from "../../../assets/images/git.png";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={styles.back}>*/}
            {/*    <img src={cover} alt="background"/>*/}
            {/*</div>*/}
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : profilePhoto}
                     className={styles.profilePhoto}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={styles.aboutMe}>
                {props.profile.aboutMe}
            </div>
        </div>
    );
}

export default ProfileInfo;