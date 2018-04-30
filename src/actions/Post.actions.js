export const setImageForPost = (img = null) => async (dispatch, getState) => {

  dispatch({
    type: 'SET_IMAGE_FOR_POST',
    payload: img
  });
}


export const postImage = (details = {}) => async (dispatch, getState) => {
  return new Promise( (resolve, reject) => {
    resolve(true);
    // dispatch({
    //   type: 'SET_IMAGE_FOR_POST',
    //   payload: img
    // });
  });
}
