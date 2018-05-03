import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { FlushThunks } from 'redux-testkit';

import {initialState} from './reducers/App.reducer.test';

import * as reducers from '../redux/reducers';
import * as uut from '../actions/App.actions';


describe('store integration', () => {

  let flushThunks, store;

  beforeEach(() => {
    jest.resetAllMocks();
    flushThunks = FlushThunks.createMiddleware();
    store = createStore(
      combineReducers(reducers),
      applyMiddleware(flushThunks, thunk)
    );
  });

  // it('should test something', async () => {
  //   console.log('store',store.getState());
  //   const result = await store.dispatch(uut.initSettings());
  //   console.log('result', result);
  // });

});
