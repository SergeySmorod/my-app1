import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
import state, {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";

const Dialogs =(props)=>{
    let state = props.store.getState().dialogsPage
    let dialogName =
        props.DialogsData.map(p =><DialogItem name={p.name} id={p.id}/>)
    let dialogMessage =
        props.messagesData.map(p =><Message message={p.message}/>)
    let newMessageBody =
        props.newMessageBody;
    let onSendMessageClick =()=>{
        props.store.dispatch(sendMessageCreator());
    }
   let onNewMessageChange =(e)=>{
   let body = e.target.value;
   props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return(
      <div className={s.dialogs}>
          <div className ={s.dialogsItems}>
              {dialogName}
          </div>
          <div className='messages'>
             <div>{dialogMessage}</div>
              <div><textarea value={newMessageBody}
                             onChange={onNewMessageChange} placeholder='enter you message'></textarea></div>
              <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
      </div>
    )
};

export default Dialogs;