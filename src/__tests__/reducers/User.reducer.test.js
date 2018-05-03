import { Reducer } from 'redux-testkit';
import uut from '../../redux/reducers';
import {initialState} from './App.reducer.test';

const users = [
    {
      id: 0,
      username: 'ketsdsdasdasdas',
      name: 'Kattysdfsdfsdsad',
      avatar: 'assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG',
      details: 'Know what? According to researchers, it takes less than two-tenths of a second for an online visitor to form an impression of your account.',
      statistics: {
        posts: 67,
        followers: 638,
        following: 505
      }
    },
    {
      id: 1,
      username: 'encryptionBoy',
      name: 'J.K. 23',
      avatar: 'https://s3.amazonaws.com/instabyte/users/02.jpg',
      details: 'cypher cypher...',
      statistics: {
        posts: 167,
        followers: '6.5K',
        following: '14'
      }
    },
    {
      id: 2,
      username: 'sarah_4688',
      name: 'Sarah Berlin',
      avatar: 'https://s3.amazonaws.com/instabyte/users/03.jpg',
      details: 'I play music 🎧 🎛',
      statistics: {
        posts: 67,
        followers: '12M',
        following: '1.4K'
      }
    }
  ]

describe('Users reducer', () => {

  it('should replace users array with updated on fetch', () => {
    const action = {
      type: 'USERS_FETCHED',
      payload: users,
    };
    const state = initialState;
    const changes = { users: {data: users} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

  it('should replace users array with updated on update action', () => {
    const action = {
      type: 'UPDATE_USERS',
      payload: users,
    };
    const state = initialState;
    const changes = { users: {data: users} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

})
