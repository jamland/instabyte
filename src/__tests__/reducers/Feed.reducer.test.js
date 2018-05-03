import { Reducer } from 'redux-testkit';
import uut from '../../redux/reducers';
import {initialState} from './App.reducer.test';

const feedData = [
   {
      "id":0,
      "authorId":0,
      "uri":"https://s3.amazonaws.com/instabyte/posts/01.jpg",
      "likes":2,
      "created":"Mon Apr 30 2018 14:27:05 GMT+0300 (EEST)",
      "comments":[
         {
            "authorId":2,
            "text":"nice nice nice.. 😊🚣🏽",
            "date":"Mon Apr 30 2018 16:27:05 GMT+0300 (EEST)"
         }
      ]
   },
   {
      "id":1,
      "authorId":2,
      "uri":"https://s3.amazonaws.com/instabyte/posts/02.jpg",
      "likes":0,
      "created":"Mon Apr 28 2018 10:27:05 GMT+0300 (EEST)",
      "comments":[
         {
            "authorId":0,
            "text":"Mez who den loollll﻿",
            "date":"Mon Apr 28 2018 15:47:00 GMT+0300 (EEST)"
         },
         {
            "authorId":2,
            "text":"Bare re uploads lately.. you man just take your time man stop rushing lol﻿",
            "date":"Mon Apr 29 2018 05:24:05 GMT+0300 (EEST)"
         }
      ]
   },
];

const newPost = {
    "id":3,
    "authorId":0,
    "uri":"https://s3.amazonaws.com/instabyte/posts/03.jpg",
    "likes":0,
    "created":"Mon Apr 30 2018 14:27:05 GMT+0300 (EEST)",
    "comments":[
    ]
 }

const feedDataWithNewPost = [
    {
       "id":3,
       "authorId":0,
       "uri":"https://s3.amazonaws.com/instabyte/posts/03.jpg",
       "likes":0,
       "created":"Mon Apr 30 2018 14:27:05 GMT+0300 (EEST)",
       "comments":[
       ]
    },
   {
      "id":0,
      "authorId":0,
      "uri":"https://s3.amazonaws.com/instabyte/posts/01.jpg",
      "likes":2,
      "created":"Mon Apr 30 2018 14:27:05 GMT+0300 (EEST)",
      "comments":[
         {
            "authorId":2,
            "text":"nice nice nice.. 😊🚣🏽",
            "date":"Mon Apr 30 2018 16:27:05 GMT+0300 (EEST)"
         }
      ]
   },
   {
      "id":1,
      "authorId":2,
      "uri":"https://s3.amazonaws.com/instabyte/posts/02.jpg",
      "likes":0,
      "created":"Mon Apr 28 2018 10:27:05 GMT+0300 (EEST)",
      "comments":[
         {
            "authorId":0,
            "text":"Mez who den loollll﻿",
            "date":"Mon Apr 28 2018 15:47:00 GMT+0300 (EEST)"
         },
         {
            "authorId":2,
            "text":"Bare re uploads lately.. you man just take your time man stop rushing lol﻿",
            "date":"Mon Apr 29 2018 05:24:05 GMT+0300 (EEST)"
         }
      ]
   }
];


describe('Feed reducer', () => {

  it('should populate store with Feed data', () => {
    const action = {
      type: 'FEED_FETCHED',
      payload: feedData,
    };
    const state = initialState;
    const changes = { feed: {data: feedData} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

  it('should populate store with empty Feed data', () => {
    const action = {
      type: 'FEED_FETCHED',
      payload: [],
    };
    const state = initialState;
    const changes = { feed: {data: []} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

  it('should add new post to store at 1st position', () => {

    const action = {
      type: 'NEW_POST_ADDED',
      payload: newPost,
    };

    const state = {
      ...initialState,
      feed: {
        data: feedData,
      }
    }
    const changes = { feed: {data: feedDataWithNewPost} };

     Reducer(uut).withState(state)
    .expect(action)
    .toChangeInState(changes);
  });

  it('should add new post to store at 1st position', () => {

    const action = {
      type: 'NEW_POST_ADDED',
      payload: newPost,
    };

    const state = {
      ...initialState,
      feed: {
        data: feedData,
      }
    }
    const changes = { feed: {data: feedDataWithNewPost} };

     Reducer(uut).withState(state)
    .expect(action)
    .toChangeInState(changes);
  });


})
