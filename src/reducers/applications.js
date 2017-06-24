import { combineReducers } from 'redux'
import { RECEIVE_APPLICATIONS, DELETE_APPLICATION_SUCCESS } from '../constants/ActionTypes'

const applications = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_APPLICATIONS:
      return [...action.applications]

    case DELETE_APPLICATION_SUCCESS:
      const index = state.findIndex(f => f.id === action.application.id);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ]

    default:
      return state
  }
}

export default combineReducers({ applications });
