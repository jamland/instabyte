export default function reducer ( state = {
  data: null,
}, action) {
  switch (action.type) {
    case 'FEED_FETCHED':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
