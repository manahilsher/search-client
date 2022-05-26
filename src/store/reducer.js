
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { results: [] }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, results: action.payload };
    default:
      return state;
  }
};