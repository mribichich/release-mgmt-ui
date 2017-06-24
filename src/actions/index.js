import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveApplications = applications => ({ type: types.RECEIVE_APPLICATIONS, applications: applications })

export const getApplications = () => dispatch => {
  shop.getApplications()
    .then(applications => {
      dispatch(receiveApplications(applications));
    })
  // .catch((error) => {
  //   dispatch({ type: types.ADD_APPLICATION_FAILURE, error })
  // });
}

export const addApplication = (application) => dispatch => {
  dispatch({
    type: types.ADD_APPLICATION_REQUEST
  });

  return shop.addApplications(application)
    .then((application) => {
      dispatch({ type: types.ADD_APPLICATION_SUCCESS, application })
    })
    .catch((error) => {
      dispatch({ type: types.ADD_APPLICATION_FAILURE, error })
    });
}

export const deleteApplication = (application) => dispatch => {
  dispatch({
    type: types.DELETE_APPLICATION_REQUEST
  });

  return shop.deleteApplications(application)
    .then(() => {
      dispatch({ type: types.DELETE_APPLICATION_SUCCESS, application })
    })
    .catch((error) => {
      dispatch({ type: types.DELETE_APPLICATION_FAILURE, error })
    });
}
