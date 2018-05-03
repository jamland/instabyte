export default function reducer ( state = {
  imageForPost: null,
}, action) {
  switch (action.type) {
    case 'SET_IMAGE_FOR_POST':
      return {
        ...state,
        imageForPost: action.payload,
      }
    default:
      return state
  }
}
