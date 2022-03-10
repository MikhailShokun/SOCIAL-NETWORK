import React from 'react';
import styles from './ProfileInfo.module.css';
import cover from '../../../assets/images/space.png';


const  ProfileInfo = () => {
    return (
      <div>
        <div className={styles.back}>
          <img src={cover} alt="background"/>
        </div>
        <div className={styles.descriptionBlock}>
            ava + description
        </div>
      </div>
    );
}

export default ProfileInfo;