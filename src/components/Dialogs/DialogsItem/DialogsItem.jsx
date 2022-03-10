import React from "react";
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import avaDialog from '../../../assets/images/avaBoy1.png';

const DialogItem = (props) => {

    // let path = "/dialogs/" + props.id;
    // let newPostElement = React.createRef();


    return (
            <div className={styles.dialogItem}>
                {/*<div>*/}
                {/*    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>*/}
                {/*</div>*/}
                <div className={styles.avaName}>
                    <img src={avaDialog} alt="ava"></img>
                    <NavLink to={"/dialogs/" + props.id}
                             className={dialogData => dialogData.isActive ? styles.activeLink : styles.dialogLink}>{props.name}</NavLink>
                </div>
                <div className={styles.message}>{props.message}</div>
            </div>
    )
};

export default DialogItem;