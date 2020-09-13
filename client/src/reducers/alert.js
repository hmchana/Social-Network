import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

// What alerts is gonna looks like , they gonna ba objects in an array :

//  const initialState = [
//    {
//      id:1,
//      msg: 'Please log in',
//      alertType: 'success'
//    }
// ]

// alertType is for that we can decide in our alert component and decide color

// we have the data inside the payload
