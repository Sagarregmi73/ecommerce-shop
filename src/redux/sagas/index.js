import { call, put, takeEvery } from 'redux-saga/effects'
import {GET_USERS_FETCH,GET_USERS_SUCCESS} from '../action'
import Api from '../../data'

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function fetchUsers(){
  return Api;
 
}

function* fetchUser(action) {
 
      const users = yield call(fetchUsers);
      yield put({type: GET_USERS_SUCCESS, users});
 
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* mySagas() {
  yield takeEvery(GET_USERS_FETCH, fetchUser);
}

export default mySagas;