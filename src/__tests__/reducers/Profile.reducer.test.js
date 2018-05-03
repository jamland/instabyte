import { Reducer } from 'redux-testkit';
import uut from '../../redux/reducers';
import {initialState} from './App.reducer.test';

const user = {
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
}

const profileFormData = {
  name: 'Kattysdfsdfsdsad',
  username: 'ketsdsdasdas',
  details: 'Know what? According to researchers, it takes less than two-tenths of a second for an online visitor to form an impression of your account.'
}

const imageForAvatar = {
  playableDuration: 0,
  isStored: true,
  filename: 'IMG_0005.JPG',
  width: 3000,
  height: 2002,
  uri: 'assets-library://asset/asset.JPG?id=ED7AC36B-A150-4C38-BB8C-B6D696F4F2ED&ext=JPG'
}

describe('Profile reducer', () => {

  it('should set current user details', () => {
    const action = {
      type: 'UPDATE_CURRENT_USER',
      payload: user,
    };
    const state = initialState;
    const changes = { profile: {currentUser: user} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

  it('should set temp data from Profile form', () => {
    const action = {
      type: 'UPDATE_PROFILE_FORM_DATA',
      payload: profileFormData,
    };
    const state = initialState;
    const changes = { profile: {profileFormData} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

  it('should set image which will be used for avatar', () => {
    const action = {
      type: 'SET_IMAGE_FOR_AVATAR',
      payload: imageForAvatar,
    };
    const state = initialState;
    const changes = { profile: {imageForAvatar} };

    Reducer(uut).withState(state).expect(action).toChangeInState(changes);
  });

})
