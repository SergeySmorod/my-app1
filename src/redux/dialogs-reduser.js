const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
    DialogsData: [
        {id: '1', name: 'Dmitry'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Sasha'},
        {id: '4', name: 'Igor'},
        {id: '5', name: 'Valera'},
    ],
    messagesData: [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'I am fine'},
        {id: '4', message: 'Yoo'},
        {id: '5', message: 'Yoo'},
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) =>{

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body
            };


        case SEND_MESSAGE:
        let body = state.newMessageBody;
            return  {...state,
                newMessageBody: '',
                messagesData: [...state.messagesData,{id: '6', message: body}]

            };


        default:
            return state;
    }

}
export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator =
     (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;