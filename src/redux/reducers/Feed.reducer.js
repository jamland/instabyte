export default function reducer ( state = {
  data: null,
}, action) {
  switch (action.type) {
    case 'FEED_FETCHED':
      return {
        ...state,
        data: action.payload,
      }
    case 'NEW_POST_ADDED':
      return {
        ...state,
        data: [
          action.payload,
          ...state.data || {},
        ],
      }
    default:
      return state
  }
}
