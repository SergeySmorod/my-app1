import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
   return(
       <div className={s.item}>
        <NavLink to={/dialogs/+props.id}> {props.name} </NavLink>
    </div>);
}
const DialogMessage =(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs =()=>{
    return(
      <div className={s.dialogs}>
          <div className ={s.dialogsItems}>
              <DialogItem name='Dmitry' id='1'/>
              <DialogItem name='Sveta' id='2'/>
              <DialogItem name='Sasha' id='3'/>
              <DialogItem name='Igor' id='4'/>
              <DialogItem name='Valera' id='5'/>
          </div>
          <div className='messages'>
              <DialogMessage message='Hello'/>
              <DialogMessage message='How are you'/>
              <DialogMessage message='I am fine'/>
          </div>
      </div>
    )
};

export default Dialogs;