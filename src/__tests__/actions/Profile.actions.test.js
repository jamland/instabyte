import { Thunk } from 'redux-testkit';
import {initialState} from '../reducers/App.reducer.test';
import * as uut from '../../actions/Profile.actions';

const users = [
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

describe('Profile actions', () => {

  it('should do nothing when no users data', async () => {
    const state = initialState;
    const dispatches = await Thunk(uut.getUserDetails).withState(state).execute(2);

    expect(dispatches.length).toBe(0);
  });

  it('should find right user', async () => {
    const state = {
      ...initialState,
      users: {
        data: users,
      }
    }
    const dispatches = await Thunk(uut.getUserDetails).withState(state).execute(2);

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual( {
      type: 'UPDATE_CURRENT_USER',
      payload: users[2],
    } );
  });

  it('should update right user fields', async () => {
    const state = {
      ...initialState,
      users: {
        data: users,
      },
      profile: {
        currentUser: users[2],
      }
    }
    const updates = {
      username: 'andy'
    };
    const expected = {
      ...initialState,
      users: {
        data: [
          users[0],
          users[1],
          {
            ...users[2],
            ...updates,
          },
        ]
      },
      profile: {
        currentUser: {
          ...users[2],
          ...updates,
        },
      }
    }

    const dispatches = await Thunk(uut.updateUsers).withState(state).execute(updates);

    expect(dispatches.length).toBe(2);
    expect(dispatches[0].isPlainObject()).toEqual( true );
    expect(dispatches[1].isPlainObject()).toEqual( false );

    expect(dispatches[0].getAction()).toEqual( {
      type: 'UPDATE_USERS',
      payload: [
        users[0],
        users[1],
        {
          ...users[2],
          ...updates,
        },
      ],
    } );
  });


  it('should update current user', async () => {
    const state = {
      ...initialState,
      profile: {
        currentUser: users[2],
      },
    }
    const updates = {
      username: 'andy'
    };
    const expected = {
      ...users[2],
      ...updates,
    }

    const dispatches = await Thunk(uut.setCurrentUser).withState(state).execute(updates);

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual( {
      type: 'UPDATE_CURRENT_USER',
      payload: expected,
    } );
  });

  it('should dispatch 1 action on update', async () => {
    const state = initialState;

    const dispatches = await Thunk(uut.updateUserViaForm)
    .withState(state).execute();

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].isPlainObject()).toEqual( false );
  });

  it('should update profile data', async () => {
    const state = initialState;
    const changes = {
      name: 'Bruce Lee'
    }

    const dispatches = await Thunk(uut.updateProfileFormData)
    .withState(state).execute(changes);

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual( {
      type: 'UPDATE_PROFILE_FORM_DATA',
      payload: changes,
    } );
  });

  it('should update profile data', async () => {
    const state = initialState;
    const changes = {
      uri: 'http://whatever.com/1.jpg'
    }

    const dispatches = await Thunk(uut.setImageForAvatar)
    .withState(state).execute(changes);

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual( {
      type: 'SET_IMAGE_FOR_AVATAR',
      payload: changes,
    } );
  });

  it('should update profile data', async () => {
    const state = {
      ...initialState,
      users: {
        data: users,
      },
      profile: {
        currentUser: users[2],
        imageForAvatar: {
          uri: 'http://whatever.com/1.jpg'
        }
      },
    }
    const updatedUsers = [
      users[0],
      users[1],
      {
        ...users[2],
        avatar: 'http://whatever.com/1.jpg',
      }
    ]

    const dispatches = await Thunk(uut.updateUserAvatar)
      .withState(state).execute();

    expect(dispatches.length).toBe(2);
    expect(dispatches[0].getAction()).toEqual( {
      type: 'UPDATE_USERS',
      payload: updatedUsers,
    } );
    expect(dispatches[1].isFunction()).toBe(true);
  });
})
