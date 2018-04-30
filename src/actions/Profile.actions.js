export const getUserDetails = (id = 0) => async (dispatch, getState) => {
  const user = getState().users.data.filter( user => user.id === id)[0];

  dispatch({
    type: 'UPDATE_USER',
    payload: user
  });
}
