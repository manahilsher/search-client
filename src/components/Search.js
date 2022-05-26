import React from 'react';
import { connect } from 'react-redux';

import { fetchResultsThunk, selectResultThunk } from '../store/action';

const Search = (props) => {
  const onSearch = e => {
    console.log(e.target.value);
    console.log("ABOUT TO FETCH RESULTS");
    props.fetchResultsThunk(e.target.value);
  }

  const onClick = id => {
    props.selectResultThunk(id);
  }

  const renderResults = () => {
    const searchResults = props.results.map(r => (
      <div className="search-result" key={r.id} onClick={() => onClick(r.id)}>{r.url}</div>
    ))
    return searchResults;
  }

  return (
    <>
      <input type="text" onChange={e => onSearch(e)} className="search-box"></input>
      <div className="search-results">
        {props.results ? renderResults() : null}
      </div>
    </>
  );
};

const mapState = state => {
  return { results: state.results };
} 

export default connect(mapState, { fetchResultsThunk, selectResultThunk })(Search);