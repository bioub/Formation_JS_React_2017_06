import { MODIFY_HORLOGE_DELAY } from '../actions/horloge';

export const horloge = (state = {}, action) => {
  switch (action.type) {
    case MODIFY_HORLOGE_DELAY:
      return {
        ...state,
        delay: action.delay,
      };
    default:
      return state;
  }
};
