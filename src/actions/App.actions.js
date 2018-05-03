import * as HomeActions from './Home.actions';
import * as ProfileActions from './Profile.actions';

export const initSettings = () => async (dispatch, getState) => {
  const feedLoaded = getState().app.feedLoaded;

  if (!feedLoaded) {
    dispatch( HomeActions.fetchHomeData() )
    .then( data => {
      dispatch( ProfileActions.getUserDetails() );
    })
  }
}
