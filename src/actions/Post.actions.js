export const setImageForPost = (img = null) => async (dispatch, getState) => {

  dispatch({
    type: 'SET_IMAGE_FOR_POST',
    payload: img
  });
}
