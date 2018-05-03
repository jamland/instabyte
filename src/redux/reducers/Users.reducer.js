export default function reducer ( state = {
  data: null
}, action) {
  switch (action.type) {
    case 'USERS_FETCHED':
    case 'UPDATE_USERS':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
