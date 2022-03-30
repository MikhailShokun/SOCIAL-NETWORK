import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import profilePhoto from "../../../assets/images/git.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (values) => {
        // console.log(values);
       saveProfile(values);
        setEditMode(false);
    };

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large !== null ? profile.photos.large : profilePhoto}
                     className={styles.profilePhoto} alt={'ava'}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
                    : <ProfileData gotoEditMode={() => {setEditMode(true)}}
                                   profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={styles.aboutMe}>
                {profile.aboutMe}
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, gotoEditMode}) => {
  return <div>
      {isOwner && <div><button onClick={gotoEditMode}>edit</button></div>}
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>

        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={styles.contacts}>
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            </div>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>
}


export default ProfileInfo;