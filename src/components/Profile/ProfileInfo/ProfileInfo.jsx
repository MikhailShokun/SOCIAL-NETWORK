import React from 'react';
import s from './ProfileInfo.module.css';

const  ProfileInfo = () => {
    return (
      <div>
        <div>
          <img className={s.back} src="background.png" alt="background"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
      </div>
    );
}

export default ProfileInfo;