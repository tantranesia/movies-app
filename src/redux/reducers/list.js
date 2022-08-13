const initialState = {
  films: [],
};

function filmReducers(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case 'GET_FILM':
      return {
        ...state,
        films: payload,
      };
    default:
      return state;
  }
}

export default filmReducers
