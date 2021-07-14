import { GET_DATA} from "../actions/actions";

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
        return [...state, action.payload.text];
    default:
      return state;
  }
};

export default reducer;
