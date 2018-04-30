import data from '../config/data.json';

export const fetchHomeData = () => async (dispatch, getState) => {

  dispatch({type: 'CONTENT_LOADING'});

  dispatch( (dispatch, getState) => Promise.all([
    dispatch( fetchFeed() ),
    dispatch( fetchUsers() ),
  ]) )
  .then( data => {
      dispatch({type: 'CONTENT_LOADED'});
      dispatch({type: 'FEED_LOADED'});
    }
  )
}

export const fetchFeed = () => async (dispatch, getState) => {
  return new Promise( async (resolve, reject) => {

    try {
      console.log('result',data);

      // simulate fetch
      setTimeout(() => {
        const feed = data.feed;

        dispatch({
          type: 'FEED_FETCHED',
          payload: feed,
        });

        resolve();
      }, 200);


    } catch (e) {
      console.log('error', e);
      reject(e);

      // dispatch({
      //   type: 'FETCH_ERROR',
      //   payload: error,
      // })
    }

  })
}

export const fetchUsers = () => async (dispatch, getState) => {
  return new Promise( async (resolve, reject) => {
    try {
      console.log('result',data);

      // simulate fetch
      setTimeout(() => {
        const users = data.users;

        dispatch({
          type: 'USERS_FETCHED',
          payload: users,
        });

        resolve();
      }, 200);


    } catch (e) {
      console.log('error', e);
      reject(e);

      // dispatch({
      //   type: 'FETCH_ERROR',
      //   payload: error,
      // })
    }

  })
}
