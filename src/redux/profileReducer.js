import post from "../components/Profile/MyPosts/Post/Post";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 11},
        {id: 2, post: "It's my first post", likesCount: 20},
        {id: 2, post: "Who are you?", likesCount: 15},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 8,
                post: state.newPostText,
                likesCount: 5
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;