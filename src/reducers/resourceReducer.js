import {fromJS} from "immutable";
import {LOADING_RESOURCE} from "../actions/generalResourcesActions";

const initialState = fromJS({
  loading: true
});

function resourceReducer(state = initialState, {type, payload}) {
  switch (type) {
    case LOADING_RESOURCE:
      return state.set('loading', true);
    default:
      return state;
  }
}

export default resourceReducer