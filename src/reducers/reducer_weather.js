import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Do not manipulate an existing array instead we create an entirely new array
      //return state.concat([ action.payload.data ]);
      // taking an existing array (state), flattening it out and creating a new one - action.payload.data
      return [ action.payload.data, ...state];  // [city, city, ...]
  }
  return state;
}
