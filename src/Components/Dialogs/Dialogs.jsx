import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";

const Dialogs =(props)=>{
    let dialogName =
        props.DialogsData.map(p =><DialogItem name={p.name} id={p.id}/>)
    let dialogMessage =
        props.messagesData.map(p =><Message message={p.message}/>)
    return(
      <div className={s.dialogs}>
          <div className ={s.dialogsItems}>
              {dialogName}
          </div>
          <div className='messages'>
              {dialogMessage}
          </div>
      </div>
    )
};

export default Dialogs;