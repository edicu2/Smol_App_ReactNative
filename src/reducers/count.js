import {INCREASE_COUNT,DECREASE_COUNT,SET_COUNT,GET_COUNT } from '../actions/types';

const initialStates = {
  count: 0,
}

export const countReducer = (state = initialStates, action) => {
  const { type } = action;
  switch (type) {
    case INCREASE_COUNT: {
      return {
        ...state,
        count: state.count +1
      }
    }
    case DECREASE_COUNT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    case GET_COUNT: {
      return {
        ...state,   
      }
    }
    default: {
      return state;
    }
    
  } 
}