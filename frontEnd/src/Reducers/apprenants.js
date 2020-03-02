import {
  GET_APPRENANTS,
  ADD_APPRENANT,
  UPDATE_APPRENANT,
  DELETE_APPRENANT
} from "../Actions/actionTypes";

const initialState = {
  loading: true,
  apprenants: []
};

const apprenantsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_APPRENANTS:
      return {
        apprenants: [...payload],
        loading: false
      };
    case ADD_APPRENANT:
      return {
        apprenants: [...state.apprenants, payload],
        loading: false
      };
    case UPDATE_APPRENANT:
      return {
        apprenants: state.apprenants.map(apprenant =>
          apprenant._id === payload.id ? payload.apprenant : apprenant
        )
      };
    case DELETE_APPRENANT:
      return {
        ...state,
        apprenants: state.apprenants.filter(
          apprenant => apprenant._id !== payload
        ),
        loading: false
      };

    default:
      return state;
  }
};

export default apprenantsReducer;
