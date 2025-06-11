import * as api from '../Api';
import { setcurrentuser } from './currentuser';

export  const login = (authdata) => async (dispatch) => {
  try {
    const { data } = await api.login(authdata);
    localStorage.setItem('Profile', JSON.stringify(data)); // Set to localStorage
    dispatch({ type: "AUTH", data });
     dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile'))))
  } catch (error) {
    console.log(error);
    
  }
};
// export default login; // Commenting out as there will be multiple exports

// Action Types for Points
export const ADD_POINTS_REQUEST = "ADD_POINTS_REQUEST";
export const ADD_POINTS_SUCCESS = "ADD_POINTS_SUCCESS";
export const ADD_POINTS_FAILURE = "ADD_POINTS_FAILURE";

// Action Creator for Adding Points
export const addPointsForVideoCompletion = (pointsToAdd) => async (dispatch) => {
  dispatch({ type: ADD_POINTS_REQUEST });
  try {
    // The backend uses the token to identify the user.
    // pointsToAdd is the payload e.g. { pointsToAdd: 5 }
    const { data } = await api.addPoints({ pointsToAdd });

    // data should be { message: "Points added successfully", points: user.points }
    // We need to update the currentUser in Redux state, specifically their points.
    // The backend returns the new total points.
    dispatch({ type: ADD_POINTS_SUCCESS, payload: data }); // payload contains { message, points }

    // Update localStorage Profile to reflect new points
    const profile = JSON.parse(localStorage.getItem('Profile'));
    if (profile && profile.result) {
      profile.result.points = data.points; // Assuming data.points is the new total
      localStorage.setItem('Profile', JSON.stringify(profile));
      // Dispatch setcurrentuser to update the Redux state from localStorage,
      // or handle points update directly in currentuserreducer for ADD_POINTS_SUCCESS
      dispatch(setcurrentuser(profile));
    }

  } catch (error) {
    console.error("Error adding points:", error.response ? error.response.data : error.message);
    dispatch({ type: ADD_POINTS_FAILURE, payload: error.response ? error.response.data : error.message });
  }
};




