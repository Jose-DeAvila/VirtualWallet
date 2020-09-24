import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listLatest } from '../actions/latestActions';

function LatestScreen(props){
  const latestList = useSelector(state=>state.latestList);
  const { transactions, loading, error } = latestList;
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(listLatest());
    return () => {
      //
    }
  }, []);

  return<div className="latest">
      <h1>Latest transactions</h1>
      {loading? <div>Loading latest...</div>:
      error? <div>No transactions</div>:(
        <div></div>
      )}
      </div>
}

export default LatestScreen;