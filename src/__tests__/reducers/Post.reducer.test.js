import { Reducer } from 'redux-testkit';
import uut from '../../redux/reducers';
import {initialState} from './App.reducer.test';

const img = {
   "playableDuration":0,
   "isStored":true,
   "filename":"IMG_0002.JPG",
   "width":4288,
   "height":2848,
   "uri":"assets-library://asset/asset.JPG?id=B84E8479-475C-4727-A4A4-B77AA9980897&ext=JPG"
}

describe('Post reducer', () => {

  it('should set image for further post to store', () => {
    const action = {
      type: 'SET_IMAGE_FOR_POST',
      payload: img,
    };
    const state = initialState;
    const changes = { post: {imageForPost: img} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

})
