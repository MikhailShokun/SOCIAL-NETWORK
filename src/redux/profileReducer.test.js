import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import expect from "expect";

let state =  {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 11},
        {id: 2, post: "It's my first post", likesCount: 20},
        {id: 3, post: "Who are you?", likesCount: 15},
        {id: 4, post: "Are you ok?", likesCount: 17},
    ]
};

it('length of post should be incremented', () => {
    // 1. test data (начальные данные)
    let action = addPostActionCreator('it-kamasutra.com');
    // 2. action (действие)
    let newState = profileReducer(state, action);
    // 3. expectation (ожидание)
    expect (newState.posts.length).toBe(5);
});

it('post should be correct ', () => {
    // 1. test data (начальные данные)
    let action = addPostActionCreator('it-kamasutra.com');
    // 2. action (действие)
    let newState = profileReducer(state, action);
    // 3. expectation (ожидание)
    expect (newState.posts[4].post).toBe("it-kamasutra.com");
});

it('after deleting length should be decremented', () => {
    // 1. test data (начальные данные)
    let action = deletePost(1);
    // 2. action (действие)
    let newState = profileReducer(state, action);
    // 3. expectation (ожидание)
    expect (newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data (начальные данные)
    let action = deletePost(1000);
    // 2. action (действие)
    let newState = profileReducer(state, action);
    // 3. expectation (ожидание)
    expect (newState.posts.length).toBe(4);
});








