import { put, takeLatest, all } from 'redux-saga/effects';

function* getMissions(state) {
  const json = yield fetch('https://api.spaceXdata.com/v3/launches?limit=10&' + new URLSearchParams(state.payload).toString())
    .then(response => response.json());
  
  yield put({ type: "GET_DATA", payload: json });
}

export default function* () {
  yield all([
    takeLatest('FETCH', getMissions)
  ])
}