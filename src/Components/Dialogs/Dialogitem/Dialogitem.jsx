import React from "react";
import s from './../Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
   return(
       <div className={s.item}>
        <NavLink to={/dialogs/+props.id}> {props.name} </NavLink>
    </div>);
}


export default DialogItem;