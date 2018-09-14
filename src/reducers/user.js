import {
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/UserActions'

const initialState = {
  name: '',
  error: '',
  expire: null,
  isFetching: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    
    case LOGOUT:
    return { ...state, isFetching: false, name: '', expire: null }

    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, name: action.payload.username, expire: action.payload.expire }

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
