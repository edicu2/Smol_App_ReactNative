// ActionTypes 
import { INCREASE_COUNT, DECREASE_COUNT, SET_COUNT, GET_COUNT} from './types';
// Action creators
export const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  }
};

export const decreaseCount = () => {
  return {
    type: DECREASE_COUNT,
  }
};

export const setCount = () => {
  return {
    type: SET_COUNT,
  }
};

export const getCount = () => {
  return {
    type: GET_COUNT,
  }
};