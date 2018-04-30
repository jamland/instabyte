export default function reducer ( state = {
  user: null,
  loading: false,
  feedLoaded: false,
}, action) {
  switch (action.type) {
    case 'CONTENT_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'CONTENT_LOADED':
      return {
        ...state,
        loading: false,
      }
    case 'FEED_LOADED':
      return {
        ...state,
        feedLoaded: true,
      }
    default:
      return state
  }
}
