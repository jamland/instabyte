import { Thunk } from 'redux-testkit';
import {initialState} from '../reducers/App.reducer.test';
import * as uut from '../../actions/App.actions';

describe('App actions', () => {

  it('should dispatch 2 other functions', async () => {
    const state = initialState;
    const dispatches = await Thunk(uut.initSettings).withState(state).execute();

    expect(dispatches.length).toBe(2);
    expect(dispatches[0].isFunction()).toBe(true);
    expect(dispatches[1].isFunction()).toBe(true);

    expect(dispatches[0].getType()).toEqual(undefined);
    expect(dispatches[1].getType()).toEqual(undefined);
  });
})
