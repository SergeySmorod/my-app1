import React from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Message/Message";
let DialogsData = [
    {id: '1' , name: 'Dmitry'},
    {id: '2' , name: 'Sveta'},
    {id: '3' , name: 'Sasha'},
    {id: '4' , name: 'Igor'},
    {id: '5' , name: 'Valera'},
]

let messagesData = [
    {id: '1' , message: 'Hello'},
    {id: '2' , message: 'How are you?'},
    {id: '3' , message: 'I am fine'},
    {id: '4' , message: 'Yoo'},
    {id: '5' , message: 'Yoo'},
]
const Dialogs =(props)=>{
    return(
      <div className={s.dialogs}>
          <div className ={s.dialogsItems}>
              <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
              <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
              <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
              <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
              <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
          </div>
          <div className='messages'>
              <Message message={messagesData[0].message}/>
              <Message message={messagesData[1].message}/>
              <Message message={messagesData[2].message}/>
              <Message message={messagesData[3].message}/>
              <Message message={messagesData[4].message}/>
          </div>
      </div>
    )
};

export default Dialogs;