import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    // let path = "/dialogs/" + props.id;
    // let newPostElement = React.createRef();


    return (
            <div className={s.dialogItem}>
                <div>
                    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
                </div>
                {/*<div className={s.avaName}>*/}
                {/*    <img src={props.ava} alt="ava"></img>*/}
                {/*    <NavLink to={"/dialogs/" + props.id}*/}
                {/*             className={dialogData => dialogData.isActive ? s.activeLink : s.dialogLink}>{props.name}</NavLink>*/}
                {/*</div>*/}
                <div className={s.message}>{props.message}</div>
            </div>
    )
};

export default DialogItem;