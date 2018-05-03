export default function reducer ( state = {
  currentUser: null,
  profileFormData: null,
  imageForAvatar: null,
}, action) {
  switch (action.type) {
    case 'UPDATE_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      }
    case 'UPDATE_PROFILE_FORM_DATA':
      return {
        ...state,
        profileFormData: action.payload,
      }
    case 'SET_IMAGE_FOR_AVATAR':
      return {
        ...state,
        imageForAvatar: action.payload,
      }
    default:
      return state
  }
}
