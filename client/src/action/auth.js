import * as api from '../Api';
import { setcurrentuser } from './currentuser';

  const login = (authdata) => async (dispatch) => {
  try {
    const { data } = await api.login(authdata);
    localStorage.setItem('Profile', JSON.stringify(data)); // Set to localStorage
    dispatch({ type: "AUTH", data });
     dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile'))))
  } catch (error) {
    console.log(error);
    
  }
};
export default login;

