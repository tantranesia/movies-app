const initialState = {
  items: {},
};

function detailReducers(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
}

export default detailReducers;
