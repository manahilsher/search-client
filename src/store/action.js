import axios from 'axios';
const SEARCH_URL = 'http://localhost:8080/api/v1/results';
const SELECT_URL = 'http://localhost:8080/api/v1/results/'

export const fetchResultsThunk = query => async dispatch => {
  console.log('fetchResults thunk');
  try {
    const res = await axios.post(SEARCH_URL, { query });
    const results = res.data;
    dispatch({ type: 'SEARCH', payload: results });
  } catch (err) {
    console.log(err);
  }
};

export const selectResultThunk = id => async dispatch => {
  console.log('selectResult thunk');
  try {
    await axios.post(SELECT_URL + id);
  } catch (err) {
    console.log(err);
  }
};