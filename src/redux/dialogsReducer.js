const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
        },
        {
            id: 2,
            name: "Andrey",
        },
        {
            id: 3,
            name: 'Sasha',
        },
        {
            id: 4,
            name: 'Victor',
        },
        {
            id: 5,
            name: 'Valera',
        },
        {
            id: 6,
            name: 'Sveta',
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Hi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repudiandae voluptas. Beatae eum facilis inventore quidem sapiente sed. At aut deserunt. ',
        },
        {
            id: 2,
            message: "Beatae eum facilis inventore quidem sapiente sed. At aut deserunt.",
        },
        {
            id: 3,
            message: 'How are you?',
        },
        {
            id: 4,
            message: 'Yo',
        },
        {
            id: 5,
            message: 'Where are you?',
        },
        {
            id: 6,
            message: 'eos et ex inventore maiores molestiae officia omnis possimus',
        },
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 8, message: body});
            return state;

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;