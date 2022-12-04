import React from "react";
import s from './Dialog.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";

const Dialogs =(props)=>{
    let state = props.dialogsPage
    let dialogName =
        state.DialogsData.map(p =><DialogItem name={p.name} id={p.id}/>)
    let dialogMessage =
        state.messagesData.map(p =><Message message={p.message}/>)
    let newMessageBody =
        state.newMessageBody;
    let onSendMessageClick =()=>{
        props.sendMessage();
    }
   let onNewMessageChange =(e)=>{
   let body = e.target.value;
   props.updateNewMessageBody(body);

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