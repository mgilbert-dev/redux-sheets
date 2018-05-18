import { combineReducers, createStore } from 'redux';
import {
  GENERATE_LAYOUT,
  SET_COLUMN_WIDTH
} from './actions';

const layout = (state = {}, action) => {
  switch (action.type) {
  case GENERATE_LAYOUT:
    return action.payload;

  default:
    return state;
  }
};

const header = (state = [], action) => {
  switch (action.type) {
  case GENERATE_LAYOUT:
    return action.payload[0];    

  default:
    return state;
  }
};

const rows = (state = [], action) => {
  switch (action.type) {
  case GENERATE_LAYOUT:
    return action.payload.slice(1);

  default:
    return state;
  }
};

const preferences = (state = {}, action) => {
  switch (action.type) {
  case GENERATE_LAYOUT:
    return state;
    
  case SET_COLUMN_WIDTH:
    return Object.assign({}, state, {
      columnWidth: action.payload
    });

  default:
    return state;
  }
};

const store = createStore(
  combineReducers({
    layout,
    header,
    rows,
    preferences
  })
);

export default store;