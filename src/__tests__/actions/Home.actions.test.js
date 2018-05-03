import { Thunk } from 'redux-testkit';
import {initialState} from '../reducers/App.reducer.test';
import * as uut from '../../actions/Home.actions';

const USERS_FETCHED = {
   type:'USERS_FETCHED',
   payload:[
      {
         id:0,
         username:'ket',
         name:'Katty',
         avatar:'https://s3.amazonaws.com/instabyte/users/01.jpg',
         details:'Know what? According to researchers, it takes less than two-tenths of a second for an online visitor to form an impression of your account.',
         "statistics": {
           "followers": 638,
           "following": 505,
           "posts": 67,
         },
      },
      {
         id:1,
         username:'encryptionBoy',
         name:'J.K. 23',
         avatar:'https://s3.amazonaws.com/instabyte/users/02.jpg',
         details:'cypher cypher...',
         "statistics": {
           "followers": "6.5K",
           "following": "14",
           "posts": 167,
         },
      },
      {
         id:2,
         username:'sarah_4688',
         name:'Sarah Berlin',
         avatar:'https://s3.amazonaws.com/instabyte/users/03.jpg',
         details:'I play music 🎧 🎛',
         "statistics": {
           "followers": "12M",
           "following": "1.4K",
           "posts": 67,
         },
      }
   ]
}

describe('Home actions', () => {

  it('should fetch users', async () => {
    const state = initialState;
    const dispatches = await Thunk(uut.fetchUsers).withState(state).execute();

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getType()).toEqual( 'USERS_FETCHED' );
    expect(dispatches[0].getAction()).toEqual( USERS_FETCHED );
  });

  it('should have FEED_FETCHED type action', async () => {
    const state = initialState;
    const dispatches = await Thunk(uut.fetchFeed).withState(state).execute();

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getType()).toEqual( 'FEED_FETCHED' );
  });

  it('should call 4 dispatches', async () => {
    const state = initialState;
    const dispatches = await Thunk(uut.fetchHomeData).withState(state).execute();

    expect(dispatches.length).toBe(4);
    expect(dispatches[0].getType()).toEqual( 'CONTENT_LOADING' );
    expect(dispatches[0].isPlainObject()).toEqual( true );
    // this promise dispatch
    expect(dispatches[1].getType()).toEqual( undefined );
    expect(dispatches[1].isPlainObject()).toEqual( false );

    expect(dispatches[2].getType()).toEqual( 'CONTENT_LOADED' );
    expect(dispatches[2].isPlainObject()).toEqual( true );

    expect(dispatches[3].getType()).toEqual( 'FEED_LOADED' );
    expect(dispatches[3].isPlainObject()).toEqual( true );
  });
})
