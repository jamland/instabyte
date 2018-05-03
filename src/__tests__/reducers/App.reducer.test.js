import { Reducer } from 'redux-testkit';
import uut from '../../redux/reducers';

export const initialState = {
   "app":{
      "feedLoaded":false,
      "loading":false,
      "user":null
   },
   "feed":{
      "data":null
   },
   "post":{
      "imageForPost":null
   },
   "profile":{
      "currentUser":null,
      "imageForAvatar":null,
      "profileFormData":null
   },
   "users":{
      "data":null
   }
}

describe('App reducer', () => {
  //
  // it('should have initial state', () => {
  //   expect(uut()).toEqual(initialState);
  // });

  it('should set state to loading', () => {
    const action = { type: 'CONTENT_LOADING' };
    const state = initialState;
    const changes = { app: { loading: true } };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

  it('should update state to loaded', () => {
    const action = { type: 'CONTENT_LOADED' };
    const state = {
      ...initialState,
      app: {
        "feedLoaded":false,
        "loading":true,
        "user":null
      }
    };
    const changes = { app: { loading: false } };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

  it('should state to feed loaded', () => {
    const action = { type: 'FEED_LOADED' };
    const state = initialState;
    const changes = { app: { feedLoaded: true } };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });


  it('should return the same state after accpeting a non existing action', () => {
    const action = { type: 'NON_EXISTING' };
    const state = initialState;
    Reducer(uut).withState(state).expect(action).toReturnState(state);
  });

})
