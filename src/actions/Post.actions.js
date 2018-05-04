export const setImageForPost = (img = null) => async (dispatch, getState) => {
  dispatch({
    type: 'SET_IMAGE_FOR_POST',
    payload: img
  });
}


export const postImage = (details = {}) => async (dispatch, getState) => {
  return new Promise( (resolve, reject) => {

    selectedImage = getState().post.imageForPost;
    const newDate = JSON.stringify (new Date());

    const imageForPost = {
      ...selectedImage,
      id: newDate,
      authorId: 0,
      likes: [],
      created: newDate,
      comments: [
        {
          authorId: 0,
          text: details.caption,
          date: newDate,
        },
      ],
    }

    dispatch({
      type: 'NEW_POST_ADDED',
      payload: imageForPost,
    });

    resolve(true);
  });
}
