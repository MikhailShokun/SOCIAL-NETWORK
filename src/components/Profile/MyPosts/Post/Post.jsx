import React from 'react';
import s from './Post.module.css';
import avaPost from '../../../../assets/images/git.png';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={avaPost} alt="ava"></img>
            {props.message}
            <div>
                <span>likes:</span><span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;