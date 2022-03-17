import React from 'react';
import styles from './ProfileInfo.module.css';
import cover from '../../../assets/images/seaBackground.jpg';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.back}>
                <img src={cover} alt="background"/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt={"ava"}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;