import { Thunk } from 'redux-testkit';
import {initialState} from '../reducers/App.reducer.test';
import * as uut from '../../actions/Post.actions';

const SET_IMAGE_FOR_POST = {
  type: 'SET_IMAGE_FOR_POST',
}

const img = {
   "playableDuration":0,
   "isStored":true,
   "filename":"IMG_0002.JPG",
   "width":4288,
   "height":2848,
   "uri":"assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG"
}

describe('Post actions', () => {

  it('should dispatch SET_IMAGE_FOR_POST with image', async () => {
    const state = initialState;
    const dispatches = await Thunk(uut.setImageForPost).withState(state).execute(img);

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getType()).toEqual( 'SET_IMAGE_FOR_POST' );
  });

  it('should dispatch SET_IMAGE_FOR_POST for clearing data', async () => {
    const state = initialState;
    const dispatches = await Thunk(uut.setImageForPost).withState(state).execute();

    expect(dispatches.length).toBe(1);
    expect(dispatches[0].getAction()).toEqual( {
        type: 'SET_IMAGE_FOR_POST',
        payload: null
    } );
  });

})
