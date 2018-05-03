export const getUserDetails = (id = 0) => async (dispatch, getState) => {
  const users = getState().users.data;

  if (users !== null && users.constructor === Array) {
    const user = getState().users.data.filter( user => user.id === id)[0];

    dispatch({
      type: 'UPDATE_CURRENT_USER',
      payload: user
    });
  }
}

export const updateUsers = (userUpdates) => async (dispatch, getState) => {
  const currentUserId = getState().profile.currentUser.id;
  const updatedUsers = getState().users.data.map( user => {
    if (user.id === currentUserId) {
      return {
        ...user,
        ...userUpdates,
      }
    } else return user;
  })

  dispatch({
    type: 'UPDATE_USERS',
    payload: updatedUsers,
  });

  const updatedCurrentUser = getState().users.data.filter( user => user.id === currentUserId)[0];

  dispatch( setCurrentUser(updatedCurrentUser) );
}

export const setCurrentUser = (userUpdates) => async (dispatch, getState) => {
  const user = getState().profile.currentUser;

  dispatch({
    type: 'UPDATE_CURRENT_USER',
    payload: {
      ...user,
      ...userUpdates,
    }
  });
}

export const updateUserViaForm = () => async (dispatch, getState) => {
  const userUpdates = getState().profile.profileFormData;

  dispatch( updateUsers(userUpdates) );
}

export const updateProfileFormData = (userUpdates) => async (dispatch, getState) => {
  dispatch({
    type: 'UPDATE_PROFILE_FORM_DATA',
    payload: {
      ...userUpdates,
    }
  });
}

export const setImageForAvatar = (img) => async (dispatch, getState) => {
  dispatch({
    type: 'SET_IMAGE_FOR_AVATAR',
    payload: img
  });
}

export const updateUserAvatar = () => async (dispatch, getState) => {
  const currentUserId = getState().profile.currentUser.id;
  const newAvatar = getState().profile.imageForAvatar.uri;
  const updatedUsers = getState().users.data.map( user => {
    if (user.id === currentUserId) {
      return {
        ...user,
        avatar: newAvatar,
      }
    } else return user;
  })

  dispatch({
    type: 'UPDATE_USERS',
    payload: updatedUsers,
  });

  const updatedCurrentUser = getState().users.data.filter( user => user.id === currentUserId)[0];

  dispatch( setCurrentUser(updatedCurrentUser) );
}
