import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 11},
                {id: 2, post: "It's my first post", likesCount: 20},
                {id: 2, post: "Who are you?", likesCount: 15},
            ],
            newPostText: '...',
        },
        dialogPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('state render')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}







export default store;
window.store = store;


