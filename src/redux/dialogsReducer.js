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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: body}],
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;